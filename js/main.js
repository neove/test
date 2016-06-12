/**组件划分:  
    父组件:MainComponent
    子组件：InputItem(输入框) ShowList(任务列表展示) ShowItem(ShowList的子组件)

    list数据结构:
      [
        {
          "item":  "" ,
          "completed":1或者0  ,
          "_id":   ""
        }
      ]
**/
(function () {

  //两个pubsub通信 和本地存储
  var del_item = 'del_item',
      toggle_state = 'toggle_state',
      list_storage=window.localStorage,
      todo_list=list_storage.getItem('todo_list') ? JSON.parse(list_storage.getItem('todo_list')) : [] ;

  //设置本地存储
  function setStorage(data){
    list_storage.setItem('todo_list',JSON.stringify(data));
  }

  //父组件
  var MainComponent = React.createClass({
    getInitialState: function () {
      return { list: todo_list};
    },

    //改变父组件state，同步本地存储
    changeState: function (new_list) {
      this.setState({ list: new_list });
      setStorage(new_list);
    },

    componentDidMount: function () {

      //订阅删除事件,使用filter过滤
      PubSub.subscribe(del_item, function (evname, data) {
        var new_list = this.state.list.filter(function (item, index) {
          return item._id != data;
        });
        this.setState({ list: new_list });
        setStorage(new_list);
      }.bind(this));

      //订阅状态改变事件
      PubSub.subscribe(toggle_state, function (evname, data) {
        this.state.list.map(function (item, i) {
          if (item._id === data._id) {
            item.completed = data.a
          }
        })
        this.setState({ list: this.state.list });
        setStorage( this.state.list );
      }.bind(this));
    },

    render: function () {
      return (
        <div>
          <h3>TodoList</h3>
          <InputItem list={this.state.list} onAdd={this.changeState}/>
          <ShowList  list={this.state.list} />
          <Footer    list={this.state.list} onClear={this.changeState}/>
        </div>
      );
    },
  });

  //输入框子组件
  var InputItem = React.createClass({
    //添加新work
    addWork: function (e) {
      if (e.keyCode === 13 && e.target.value.trim() != '') {
        var new_work = { "item": e.target.value, "completed": 0, "_id": Date.now() },
          new_list = this.props.list;
        new_list.unshift(new_work);
        this.props.onAdd(new_list);//两个句子合并会报错，因为unshift返回新数组的长度，而不是新的数组
        e.target.value = '';
      }
    },
    render: function () {
      return <input onKeyDown={this.addWork} className='input'></input>
    },
  });


  //列表展示子组件
  var ShowList = React.createClass({
    render: function () {
      return (
        <ul>
          {
            this.props.list.map(function (list, i) {
              return <ShowItem {...list} key={i}/>
            }.bind(this))
          }
        </ul>
      );
    },
  });

  //单个list组件，是ShowList的子组件
  var ShowItem = React.createClass({

    //改变任务的状态,发布事件
    toggleState: function (e) {
      var a = e.target.checked ? 1 : 0;
      PubSub.publish(toggle_state, { a: a, _id: this.props._id })
    },

    //删除item，发布事件
    delItem: function () {
      PubSub.publish(del_item, this.props._id)
    },
    render: function () {
      return (
        <li className={(this.props.completed ? 'done' : 'undo') + ' item'}>
          <input  type='checkbox' checked={!!this.props.completed} onClick={this.toggleState}></input>{/*同步checked状态*/}
          <lable>{this.props.item}</lable>
          <button onClick={this.delItem} className='del-btn'>Delete</button>
        </li>
      );
    },
  });

  //底部统计组件
  var Footer = React.createClass({
    delAll:function(){
      list_storage.removeItem('todo_list');
      this.props.onClear([]);

    },
    render: function () {
      var a = 0, b = 0;
      this.props.list.map(function (item, i) {  //遍历得到每个work的状态
        !!item.completed ? a++ : b++;
      })
      return <div className={(this.props.list.length ? 'show' : 'hide' )+' footer'}>
      <p className='count'>Total: {a + b} Done: {a} Left: {b}</p>
      <button className='del-all del-btn' onClick={this.delAll}>delete All</button>
      </div>  
    },
  });


  //渲染组件
  ReactDOM.render(<MainComponent/>, document.getElementById('wrapper'));
  console.log(todo_list);

})()

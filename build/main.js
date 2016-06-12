  var TodoList=React.createClass({
        //设置初始state
        getInitialState:function(){
          return {
            todolist:[],
          };
        },
        //更新state
        handleChange:function(new_list){
          this.setState({
            todolist:new_list
          });
        },
        render:function(){
          return (
            <div> 
                <h3>TodoList,work now</h3>
                <TypeList todo={this.state.todolist} onAdd={this.handleChange}/>{/*给子组件提供一个接口来更新state*/}
                <ShowList todo={this.state.todolist} onDel={this.handleChange}/>  {/*将父组件数据通过props传递给子组件*/}
            </div> 
          )
        }
  });
  //TypeList 输入和新增list组件
  var TypeList=React.createClass({
        //设置初始的状态    
        getInitialState:function(){
          return{  
           text:'',
           placeholder:'',
           mes_error:''
         };
        },
        //响应和检测用户输入
        handleInput:function(e){
          let value=e.target.value,
              mes=''
          if(value.length<2||value.length>10){
              mes='请输入3-10个字符'
          }
          this.setState({
            text:value,
            mes_error:mes
          })
        },
        //
        handleClick:function(){
          let mes='',
              text=this.refs.input.value,
              new_work=this.refs.input.value,//用getDOMDode()么?
              new_list=this.props.todo;
          if(this.refs.input.value==''){
            mes='Please write your work list here'
          }
          this.setState({placeholder:mes});
          //接收input的内容并push到list生成new_list           
          if(new_work!=''){
            new_list.push(new_work);
          }
          //调用onAdd接口，将数据更新到TodoList的state
          this.props.onAdd(new_list);
        },
        render:function(){
          return (
            <div> 
              <p className='error'>{this.state.mes_error}</p>
              <input onChange={this.handleInput} value={this.state.text} className='input' placeholder={this.state.placeholder} ref='input'/>
              <button className='add-btn' onClick={this.handleClick}>Add</button>
            </div>
            );
        },
  });
  //ItemList 列表展示组件
  var ShowList=React.createClass({
       handleDel:function(e){
        if(confirm('Are you sure to delete this item?')){
          let i=e.target.index;
          this.props.todo.splice(i,1);
          this.props.onDel(this.props.todo);
        }
       },
       render:function(){
        return (
          <ul>
            {
              this.props.todo.map(function(item,i){
                return (
                  <li className='item'>
                    <lable>{item}</lable>
                    <button className='del-btn' onClick={this.handleDel} index={i}>Delete</button>
                  </li>
                );
              }.bind(this))
            }
          </ul>
          );
       },
  });
  //将父组件渲染到页面            
  ReactDOM.render(<TodoList />,document.getElementById('wrapper'))
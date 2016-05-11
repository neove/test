/************************************************
         Author       :  Neo 
         Date         :2016.5.11
         Project Name : a part of Car Maintenance 
     
************************************************/
(function(w,d){
     var data={
             date:{
                 "year":[2016,2017,2018,2019,2020],
                 "month":[1,2,3,4,5,6,7,8,9,10,11,12],
                 "day":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
             },
             spot:{
                    "省份":["城市"],
                    "北京市":["北京","东城区","西城区","崇文区","宣武区","朝阳区","丰台区","石景山区","海淀区（中关村）","门头沟区","房山区","通州区","顺义区","昌平区","大兴区","怀柔区","平谷区","密云县","延庆县","20: 其他"],
                    "天津市":["和平区","河东区","河西区","南开区","红桥区","塘沽区","汉沽区","大港区","西青区","津南区","武清区","1蓟县","宁河县","静海县","其他"],
                    "河北省":["石家庄市","张家口市","承德市","秦皇岛市","唐山市","廊坊市","衡水市","沧州市","邢台市","邯郸市","保定市","1其他"],
                    "山西省":["太原市","朔州市","大同市","长治市","晋城市","忻州市","晋中市","临汾市","吕梁市","运城市","其他"],
                    "内蒙古":["呼和浩特市","包头市","赤峰市","呼伦贝尔市","鄂尔多斯市","乌兰察布市","巴彦淖尔市","兴安盟","阿拉善盟","锡林郭勒盟","其他"],
                    "辽宁省":["沈阳市","朝阳市","阜新市","铁岭市","抚顺市","丹东市","本溪市","辽阳市","鞍山市","大连市","营口市","盘锦市","锦州市","葫芦岛市","其他"],
                    "吉林省":["长春市","白城市","吉林市","四平市","辽源市","通化市","白山市","延边朝鲜族自治州","其他"],
                    "黑龙江省":["哈尔滨市","七台河市","黑河市","大庆市","齐齐哈尔市","伊春市","佳木斯市","双鸭山市","鸡西市","大兴安岭地区(加格达奇)","牡丹江","鹤岗市","绥化市　","其他"],
                    "上海市":["黄浦区","卢湾区","徐汇区","长宁区","静安区","普陀区","闸北区","虹口区","杨浦区","闵行 区","宝山区","嘉定区","浦东新区","金山区","松江区","青浦区","南汇区","奉贤区","崇明县","其他"],
                    "江苏省":["南京市","徐州市","连云港市","宿迁市","淮安市","盐城市","扬州市","泰州市","南通市","镇江市","常州市","无锡市","苏州市","其他"],
                    "浙江省":["杭州市","湖州市","嘉兴市","舟山市","宁波市","绍兴市","衢州市","金华市","台州市","温州市","丽水市","其他"],
                    "安徽省":["合肥市","宿州市","淮北市","亳州市","阜阳市","蚌埠市","淮南市","滁州市","马鞍山市","芜湖市","铜陵市","安庆市","黄山市","六安市","巢湖市","池州市","宣城市","其他"],
                    "福建省":["福州市","南平市","莆田市","三明市","泉州市","厦门市","漳州市","龙岩市","宁德市","其他"],
                    "江西省":["南昌市","九江市","景德镇市","鹰潭市","新余市","萍乡市","赣州市","上饶市","抚州市","宜春市","吉安市","其他"],
                    "山东省":["济南市","聊城市","德州市","东营市","淄博市","潍坊市","烟台市","威海市","青岛市","日照市","临沂市","枣庄市","济宁市","泰安市","莱芜市","滨州市","菏泽市","其他"],
                    "河南省":["郑州市","三门峡市","洛阳市","焦作市","新乡市","鹤壁市","安阳市","濮阳市","开封市","商丘市","许昌市","漯河市","平顶山市","南阳市","信阳市","周口市","驻马店市","其他"],
                    "湖北省":["武汉市","十堰市","襄樊市","荆门市","孝感市","黄冈市","鄂州市","黄石市","咸宁市","荆 州市","宜昌市","随州市","恩施土家族苗族自治州","仙桃市","天门市","潜江市","神农架林区","其他"],
                    "湖南省":["长沙市","张家界市","常德市","益阳市","岳阳市","株洲市","湘潭市","衡阳市","郴州市","永州市","邵阳市","怀化市","娄底市","湘西土家族苗族自治州","其他"],
                    "广东省":["广州市","清远市市","韶关市","河源市","梅州市","潮州市","汕头市","揭阳市","汕尾市"," 惠州市","东莞市","深圳市","珠海市","中山市","江门市","佛山市","肇庆市","云浮市","阳江市","茂名市","湛江市"," 其他"],
                    "广西自治区":["南宁市","桂林市","柳州市","梧州市","贵港市","玉林市","钦州市","北海市","防城港市","崇左市","百色市","1河池市","来宾市","贺州市","其他"],
                    "海南省":["海口市","三亚市","其他"],
                    "重庆市":["渝中区","大渡口区","江北区","沙坪坝区","九龙坡区","南岸区","北碚区","万盛区","双桥 区","渝北区","巴南区","万州区","涪陵区","黔江区","长寿区","合川市","永川市","江津市","南川市","綦江县","潼南 县","铜梁县","大足县","璧山县"],
                    "四川省":["成都市","广元市","绵阳市","德阳市","南充市","广安市","遂宁市","内江市","乐山市","自 贡市","泸州市","1宜宾市","攀枝花市","巴中市","资阳市","眉山市","雅安","阿坝藏族羌族自治州","甘孜藏族自治州","凉山彝 族自治州县","其他"],
                    "贵州省":["贵阳市","六盘水市","遵义市","安顺市","毕节地区","铜仁地区","黔东南苗族侗族自治州","黔南布依族苗族自治州","黔西南布依族苗族自治州","其他"],
                    "云南省":["昆明市","曲靖市","玉溪市","保山市","昭通市","丽江市","普洱市","临沧市","宁德市","德 宏傣族景颇族自治州","怒江傈僳族自治州","1楚雄彝族自治州","红河哈尼族彝族自治州","文山壮族苗族自治州","大理白族自治州","迪庆藏族 自治州","西双版纳傣族自治州","其他"],
                    "西藏自治区":["拉萨市","那曲地区","昌都地区","林芝地区","山南地区","日喀则地区","阿里地区","其他"],
                    "陕西省":["西安市","延安市","铜川市","渭南市","咸阳市","宝鸡市","汉中市","安康市","商洛市","其他"],
                    "甘肃省":["兰州市","嘉峪关市","金昌市","白银市","天水市","武威市","酒泉市","张掖市","庆阳市","平凉市","定西市","陇南市","临夏回族自治州","甘南藏族自治州","其他"],
                    "青海省":["西宁市","海东地区","海北藏族自治州","黄南藏族自治州","玉树藏族自治州","海南藏族自治州","果洛藏族自治州","海西蒙古族藏族自治州","其他"],
                    "宁夏回族自治区":["银川市","石嘴山市","吴忠市","固原市","中卫市","其他"],
                    "港特别行政区":["香港岛","九龙","新界","其他"],
                    "澳门特别行政区":["澳门半岛","澳门离岛","其他"],
                    "台湾":["基隆","新竹","台中","嘉义","台南","其他"]
                },
};
	
	 var Dom={
        date:document.getElementById('date'),
        spot:document.getElementById('spot'),
        item:document.getElementById('item'),
        item_pannel:document.getElementById('item_pannel'),
        date_pannel:document.getElementById('date_pannel'),
        spot_pannel:document.getElementById('spot_pannel'),
        item_submit:document.getElementById('item_submit'),
        date_submit:document.getElementById('date_submit'),
        spot_submit:document.getElementById('spot_submit'),
        form_submit:document.getElementById('form_submit'),
        item_list:item_pannel.getElementsByTagName('span'),
        item_input:document.getElementById('item'),
        date_input:document.getElementById('date'),
        spot_input:document.getElementById('spot'),
        year_select:document.getElementById('year'),
     	month_select:document.getElementById('month'),
        day_select:document.getElementById('day'),
        province_select:document.getElementById('province'),
        city_select:document.getElementById('city'),
        area_input:document.getElementById('area'),
        record:document.getElementById('record'),
        record_btn:document.getElementById('record_btn'),
        content:document.getElementsByClassName('content')

     };
     //整个应用程序的入口函数   
     function main(){
     	itemSelect();
        dateSelect();
        spotSelect();
        recordShow();
        formCheck();
     } 
     //下面写交互事件
     function itemSelect(){
        //保养项目弹出层
        var i,j;
        Dom.item.onclick=function(){
            Dom.item_pannel.style.display='block';
        };
        Dom.item_submit.onclick=function(){
            var str='';
            Dom.item_pannel.style.display='none';
            //put the item that is choosen into input
            for(i=0;i<Dom.item_list.length;i++){
                if(Dom.item_list[i].select){
                    str+=Dom.item_list[i].innerHTML+' ';
                }            
            }
            Dom.item_input.value=str; 
        };
        //choose the item list
        for(i=0;i<Dom.item_list.length;i++){
            Dom.item_list[i].select=0;
            Dom.item_list[i].onclick=function(){
                this.select=this.select ? 0 : 1;
                for(j=0;j<Dom.item_list.length;j++){
                    if(this.select){
                        this.style.background='#1c9e95';
                    }else{
                        this.style.background='#999';
                    }
                }
            };
        }   
     }
     // function to select date 
     function dateSelect(){
        //initialize date selection
        var i,j;
        var yeat_str='',
            month_str='',
            day_str='';
        for(i=0;i<data.date.year.length;i++){
            yeat_str+="<option value="+data.date.year[i]+">"+data.date.year[i]+"</option>";
        }
        for(i=0;i<data.date.month.length;i++){
            month_str+="<option value="+data.date.month[i]+">"+data.date.month[i]+"</option>";
        }
        for(i=0;i<data.date.day.length;i++){
            day_str+="<option value="+data.date.day[i]+">"+data.date.day[i]+"</option>";
        }
        Dom.year_select.innerHTML=yeat_str;
        Dom.month_select.innerHTML=month_str;
        Dom.day_select.innerHTML=day_str;
        Dom.date_submit.onclick=function(){
            Dom.date_input.value= Dom.year_select.value+'年'+Dom.month_select.value+'月'+Dom.day_select.value+'日';
            Dom.date_pannel.style.display='none';
       
       };
        Dom.date_input.onclick=function(){
            Dom.date_pannel.style.display='block';

        };
     }
     //function to select spot 
     function spotSelect(){
        //initialize province and city selection
        var province_str='',
            city_str='';
        var i,j;
        for(i in data.spot){
           province_str+='<option value='+i+'>'+i+'</option>';
        }
        Dom.province_select.innerHTML=province_str;
        cityFresh(Dom.province_select.value);
        //update province and city selection
        Dom.province_select.onchange=function(){
            cityFresh(this.value);
        };
        function cityFresh(a) {
            city_str='';
            for(j=0;j<data.spot[a].length;j++){
                city_str+='<option value='+data.spot[a][j]+'>'+data.spot[a][j]+'</option>';
            }
            Dom.city_select.innerHTML=city_str;
        }
        Dom.spot_input.onclick=function(){
             Dom.spot_pannel.style.display='block';
         };
        Dom.spot_submit.onclick=function(){
            var str='';
            if(Dom.province_select.value!='省份'){
                str+=Dom.province_select.value+Dom.city_select.value+Dom.area_input.value;
            }
            Dom.spot_input.value=str;
            Dom.spot_pannel.style.display='none';
        };
     }
     //function to check form
     function formCheck(){
        var i,val,status;
        Dom.form_submit.onclick=function(){
            status=1;
            for(i=0;i<Dom.content.length;i++){
                val=Dom.content[i].getElementsByTagName('input')[0].value;
                if(val==='' || val==='请填写此项'){
                    status=0;
                    Dom.content[i].getElementsByTagName('input')[0].value='请填写此项';
                }             
            } 
            if(status){
                alert('Submit seccess');
            }else{
                return false;
            }
        };
     }
    //function to let the record information show and hide
     function recordShow(){
        var on_off;
        Dom.record_btn.onclick=function(){
            if(on_off){
                Dom.record.style.height='36px';
                Dom.record_btn.style.cssText='-webkit-transform: rotate(0deg);-moz-transform: rotate(0deg);-ms-transform: rotate(0deg);-o-transform: rotate(0deg); transform: rotate(0deg);';
                on_off=0;
            }else{
                Dom.record.style.height='180px';
                Dom.record_btn.style.cssText='-webkit-transform: rotate(90deg);-moz-transform: rotate(90deg);-ms-transform: rotate(90deg);-o-transform: rotate(90deg); transform: rotate(90deg);';
                on_off=1;
            };
        };
     }
     //carry out  main function here
     main();
})(window,document);
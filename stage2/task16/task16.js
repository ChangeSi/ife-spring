/**
 * Created by tianyi on 2016/4/6.
 */
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var city_input = document.getElementById('aqi-city-input').value.trim();
    var value_input = document.getElementById('aqi-value-input').value.trim();
    var city = /^[a-zA-Z\u4E00-\u9FA5]+$/; //匹配汉字 或者 是英文字母
    var value = /[\d*]/;
    if (!city.test(city_input)){
        window.alert("用户输入的城市名必须为中英文字符");
    }else{
        if (!value.test(value_input)){
            window.alert("空气质量指数必须为整数");
        }else{
            aqiData[city_input]=value_input;
        }
    }
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var table=document.getElementById("aqi-table");
    var table_input="<tr><td>城市名</td><td>空气质量</td><td>操作</td></tr>";
    for(var city in aqiData){
        table_input+="<tr><td>" + city + "</td><td>" + aqiData[city] + "</td><td><button onclick=\"delBtnHandle(\'"+city+"\')\">删除</button></td></tr>";//city两边加双引号
    }
    table.innerHTML=table_input;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
    // do sth.
	
    delete aqiData[city];
    renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    var btn=document.getElementById("add-btn");
    btn.addEventListener("click",addBtnHandle,false);

}

init();

layui.use('element', function(){
    var element = layui.element;
    var $ = layui.jquery;
});

var nthTabs;
$(function () {
    editorTabs.initTab();
});

var editorTabs = {
    initTab : function (){
        nthTabs = $("#editor-tabs").nthTabs();
        nthTabs.addTab({
            id: 'home',
            title: '主页',
            content:'<div class="container" style="padding-right:5px;"><iframe id="iframepage" src="home.html" frameborder="0"></iframe></div>',
            active:true,
            allowClose: false, //是否可关闭，默认是
            location: false, //是否自动定位，默认是
            fadeIn: true //是否开启淡入淡出效果，默认是
        });
    },
    addTab :function(id,title,url){
        if(id == null || id == "")return false;
        if(title == null ||title == "")return false;
        if(url == null ||url == "")return false;

        let flag = true;
        $.each(nthTabs.getTabList(), function(v_index, v_data) {
            if(v_data.id.substring(1) === id){
                flag = false;
            }
        });
        if(!flag){
            nthTabs.setActTab(id)
            nthTabs.locationTab();
            return false;
        }
        nthTabs.addTab({
            id: id,
            title: title,
            content:'<div class="container" style="padding-right:5px;"><iframe id="iframepage" src="home.html" frameborder="0"></iframe></div>',
            allowClose: true, //是否可关闭，默认是
            location: false, //是否自动定位，默认是
            active:true,
            fadeIn: true //是否开启淡入淡出效果，默认是
            
        });
        nthTabs.setActTab(id)
        nthTabs.locationTab();
    }
}

function changeFrameHeight(){
    var layui_body= document.getElementById("layui-body");
    var iframepage= document.getElementById("iframepage");
    iframepage.height="500px";
}

var closeWindow = function(){
    layer.confirm('是否退出当前系统!', {
        btn: ['确定','取消'] //按钮
      }, function(){
        window.location = "login.html" 
      });
}
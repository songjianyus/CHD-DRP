layui.use(['element','layer','jquery','tree'], function(){
    var element = layui.element;
    var layer = layui.layer;
    var $ = layui.jquery;
   
    layui.tree({
         elem: '#sidemenubar' //传入元素选择器
        ,skin: 'sidebar'  //自定义tree样式的类名
        ,nodes:menuData  //节点数据
        ,click: function(node,item){
            //node即为当前点击的节点数据,item就是被点击的a标签对象了
            //导航按钮选中当前
            $('#sidemenubar a').removeClass('active');
            $(item).addClass('active');
            $(item).siblings('.layui-tree-spread').click();
            //添加新tab
             activeTab.init(node.name,node.url,node.id);
        }
    });
    var activeTab = {
        tabTit : '', //tab titile标题
        tabUrl : '', //tab内容嵌套iframe的src
        tabId  : '', //tab 标签的lay-id
        tabCon : function(){
            var result;
            $.ajax({
                type: 'get',
                url: this.tabUrl,
                dataType: 'html',
                success: function(data){
                    result = data;
                }
            })
            return result;
        },
        addTab : function(){ //新增tab项
            // element.tabAdd('demo', {
            //      title: this.tabTit
            //     ,content: '<iframe id="iframe" src = '+this.tabUrl +' frameborder = 0></iframe>' //支持传入html
            //     ,id: this.tabId
            // })
            $.ajax({
                type:'get',
                url:"http://localhost:8080/drp-admin/loginController",
                success:function(data){
                   alert(data)
                }
            })
            FrameWH();
        },
        changeTab: function(){ //选中tab项
            element.tabChange('demo', this.tabId);
        },
        ishasTab : function(){ //判断tab项中是否包含
            var _this = this;
            var dataId,isflag;
            var arrays = $('.layui-tab-title li');
            $.each(arrays,function(idx,ele){
                dataId = $(ele).attr('lay-id');
                if(dataId === _this.tabId){
                    isflag = true
                    return false
                }else{
                    isflag = false
                }
            })
            return isflag
        },
        init : function(tabtit,taburl,tabid){
            var _this = this;
            _this.tabUrl = taburl;
            _this.tabId = tabid;
            _this.tabTit = tabtit;
            if(taburl){
                if(!_this.ishasTab()){
                    _this.addTab();
                }
                _this.changeTab();
            }else{
                return false
            }
        }
    }

    function FrameWH() {
        var h = $(window).height() -60 -41 -44 -5;
        $("iframe").css("width","100%");
        $("iframe").css("height",h+"px");
    }



activeTab.init("主页","home.html","user_home");

});
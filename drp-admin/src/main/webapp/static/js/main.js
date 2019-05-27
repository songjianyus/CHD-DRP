

$(function(){
    createLeftMenu();
    initNthTabs();
});
var nthTabs;
function initNthTabs(){
    nthTabs = $("#main-tabs").nthTabs();
       // 新建选项卡示例
    nthTabs.addTab({
            id: 'home',
            title: '首页',
            url: "home.html",
            //content: '这是首页',
            active: true,
            allowClose: false
    });
}

function createLeftMenu(){
    $('#wrapper-tree').treeview({
        data: data,
        backColor:"#393D49",
        showBorder:false,
        highlightSearchResults:true,
        levels:5,
        onhoverColor:"lightslategrey",
        selectedBackColor:"lightsteelblue",
        expandIcon:"",
        collapseIcon:"",
        onNodeSelected  :function(event, node){
            if(node.is_last ==1){
                var id = Math.ceil(Math.random() * 1000);
                nthTabs.addTab({
                    id: 'home' + id,
                    title: '首页',
                    url: "home.html",
                    active: true
                });
            }
          }
        });          
}

function itemOnclick(target){
    //找到当前节点id
    var nodeid = $(target).attr('data-nodeid');
    var tree = $('#wrapper-tree');
    //获取当前节点对象
    var node = tree.treeview('getNode', nodeid);
    if(node.state.expanded){ 
        //处于展开状态则折叠
        tree.treeview('collapseNode', node.nodeId);  
    } else {
        //展开
        tree.treeview('expandNode', node.nodeId);
    }
}

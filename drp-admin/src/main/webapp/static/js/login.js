$(document).ready(function() {

	getCookie()//读取cookie
	$("#login_btn").click(function() {
		login();
	});

	$(document).keyup(function(event) {
		if (event.keyCode == 13) {
			login();
		}
	});
});
function login() {
	var username = $("#username").val();
	var password = $("#password").val();
	var remember_me = $("#remember_me").prop("checked")
	if (username == "") {
		layer.msg('请输入用户名');
		return false;
	}
	if (password == "") {
		layer.msg('请输入密码');
		return false;
	}

	var data = {
		user_code : username,
		user_pwd : password,
		remember_me:remember_me,
	}
	ajaxJsonObjectByUrl("hello.do",data,function(responseData){
        if(responseData.state == "true"){
			setCookie(data);
			$(window).attr('location','main.html');
		}
	})
}

function setCookie(obj){
   if(obj.remember_me){
	 $.cookie("remember_me", obj.remember_me, { expires: 7 });
	 $.cookie("username", obj.user_code, { expires: 7 });
	 $.cookie("password", obj.user_pwd, { expires: 7 });
   }else{
	 $.cookie("remember_me", obj.remember_me, { expires: -1 });
	 $.cookie("username", '', { expires: -1 });
	 $.cookie("password", '', { expires: -1 });
   }
}

function getCookie(){
	if ($.cookie("remember_me") == "true") {
        $("#remember_me").attr("checked", true);
        $("#username").val($.cookie("username"));
        $("#password").val($.cookie("password"));
    }
}

var setdataresource = function(){

 //'setdatasource.html'
 layer.open({
	title:"配置数据源",
	type: 2,
	area: ['700px', '450px'],
	fixed: true, //不固定
	content: 'setdatasource.html'
  });
}
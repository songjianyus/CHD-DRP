$(document).ready(function(){
	$("#login_btn").click(function(){
		login();
	});
});
function login(){
	var username = $("#username").val();
	var password = $("#password").val();
	if(username =="admin" && password =="123456"){
		$(location).attr('href', 'main.html');
	}else{
		alert("登录失败");
	}
	
}
$(document).ready(function(){

	$("#login_btn").click(function(){
		login();
	});

$(document).keyup(function(event){
		if(event.keyCode ==13){
			login();
		}
	});
});
function login(){
	var username = $("#username").val();
	var password = $("#password").val();
	if(username ==""){
		alert('请输入用户名');
	}
	if(password ==""){
		alert('请输入密码');
	}

	
	if(username =="admin" && password =="123456"){
		$(location).attr('href', 'main.html');
	}else{
		alert("用户名密码错误");
	}
	
}

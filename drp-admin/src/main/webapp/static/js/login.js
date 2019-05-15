$(document).ready(function(){
	$("#login_btn").click(function(){
		login();
	});
});
function login(){
	alert("登录成功");
	$(location).attr('href', 'main.html');
}
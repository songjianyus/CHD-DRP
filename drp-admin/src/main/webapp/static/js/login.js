$(document).ready(function() {

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
		user_pwd : password
	}
	$.ajax({
		type : "post",
		url : http +"hello.do",
		async : true,
		dataType : 'json',
		data : data,
		success : function(responseData) {
			if (typeof (responseData.message) != "undefined"
					&& responseData.message != null
					&& responseData.message != "") {
				$(window).attr('location','main.html');
				return false;
			}
			if (typeof (responseData.error) != "undefined"
					&& responseData.error != null && responseData.error != "") {
				layer.msg(responseData.error);
				return false;
			}
		},
		error : function(XMLHttpRequest, textStatus) {

		}
	})

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
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
//页面层-自定义
 //'setdatasource.html'
   
 layer.open({
	type: 2,
	title:"数据源配置",
	area: ['300px', '500px'],
	maxmin: false,
	content: 'setdatasource.html',
	btn:['3','4']
  });
}
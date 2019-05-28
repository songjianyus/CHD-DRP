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
		alert('请输入用户名');
		return false;
	}
	if (password == "") {
		alert('请输入密码');
		return false;
	}



	var data = {
		username : username,
		password : password
	}
	$.ajax({
		type : "post",
		url : "../../drp/sys/hello.do",
		async : true,
		dataType : 'json',
		data : data,
		success : function(responseData) {
			if (typeof (responseData.message) != "undefined"
					&& responseData.message != null
					&& responseData.message != "") {
				alert(responseData.message);
				return false;
			}
			if (typeof (responseData.error) != "undefined"
					&& responseData.error != null && responseData.error != "") {
				alert(responseData.error);
				return false;
			}
		},
		error : function(XMLHttpRequest, textStatus) {

		}
	})

}

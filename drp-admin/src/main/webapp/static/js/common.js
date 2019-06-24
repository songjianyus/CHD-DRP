//声明全局变量
var http = "http://localhost:9090/drp-admin/"


//封装ajax
//url 请求地址
//data json参数
//callBackFun 回调函数
var ajaxJsonObjectByUrl = function(url, data, callBackFun){
    $.ajax({
        type : "post",
        url : http + url,
        data:data,
        dataType : 'json',
        async: false,
        success : function(responseData) {
            if (typeof (responseData.error) != "undefined"
            && responseData.error != null && responseData.error != "") {
               layer.msg(responseData.error);
               return false;
            }

            if (typeof (responseData.message) != "undefined"
					&& responseData.message != null
					&& responseData.message != "") {
                layer.msg(responseData.message);
			}
            
            if (typeof callBackFun === 'function') {
				callBackFun(responseData);
			}
        }
    })
}
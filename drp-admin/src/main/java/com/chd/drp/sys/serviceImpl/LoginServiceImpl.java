package com.chd.drp.sys.serviceImpl;

import java.util.Map;
import org.springframework.stereotype.Service;
import com.chd.drp.sys.service.LoginService;

@Service("loginService")
public class LoginServiceImpl implements LoginService{

	@Override
	public String login(Map<String, Object> mapVo) {
		// TODO Auto-generated method stub
		
		String username = String.valueOf(mapVo.get("username"));
		
		String passowrd = String.valueOf(mapVo.get("password"));
		
		if(!"Admin".equals(username) && !"123456".equals(passowrd)) {
			return "{\"error\":\"用户名密码不正确\",\"state\":\"false\"}";
		}else {
			return "{\"message\":\"登录成功\",\"state\":\"true\"}";	
		}

	}

}

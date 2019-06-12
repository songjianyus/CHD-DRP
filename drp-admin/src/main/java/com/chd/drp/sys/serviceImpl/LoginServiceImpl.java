package com.chd.drp.sys.serviceImpl;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.chd.base.util.WisdomCloud;
import com.chd.drp.sys.dao.LoginMapper;
import com.chd.drp.sys.service.LoginService;

@Service("loginService")
public class LoginServiceImpl implements LoginService{

	
	@Resource(name="loginMapper")
	private LoginMapper loginMapper;
	
	@Override
	public String login(Map<String, Object> mapVo) {
		// TODO Auto-generated method stub

		Map<String, Object> user = loginMapper.queryUserBycode(mapVo);
		
		if(null == user) {return "{\"error\":\"用户不存在\",\"state\":\"false\"}";}
		
		try {
			WisdomCloud wc = new WisdomCloud();
			if (!user.get("user_pwd").equals(wc.encrypt((String) mapVo.get("user_pwd")))) {
				return "{\"error\":\"密码错误\",\"state\":\"false\"}";
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return "{\"message\":\"登录成功\",\"state\":\"true\"}";	
		
	}
}

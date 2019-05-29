package com.chd.drp.sys.serviceImpl;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.chd.drp.sys.dao.LoginMapper;
import com.chd.drp.sys.service.LoginService;

@Service("loginService")
public class LoginServiceImpl implements LoginService{

	
	@Resource(name="loginMapper")
	private LoginMapper loginMapper;
	
	@Override
	public String login(Map<String, Object> mapVo) {
		// TODO Auto-generated method stub

		Map<String, Object> map = loginMapper.queryLoginUserBycode(mapVo);
		
		System.out.println("map = " + map);
		
		return "{\"message\":\"登录成功\",\"state\":\"true\"}";	
		
	}
}

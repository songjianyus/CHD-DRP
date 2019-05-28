package com.chd.drp.sys.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.chd.drp.sys.service.LoginService;

@Controller
public class LoginController {


	@Resource(name="loginService")
	private LoginService loginService;
	
	@RequestMapping("/drp/sys/hello.do")
	@ResponseBody
	public Map<String,Object> login(@RequestParam Map<String, Object> mapVo) {
		
		String login = "";
		try {
			login = loginService.login(mapVo);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		return JSONObject.parseObject(login);
	}
	
	
}

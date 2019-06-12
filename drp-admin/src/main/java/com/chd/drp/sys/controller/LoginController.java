package com.chd.drp.sys.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.chd.drp.sys.service.LoginService;

@Controller
public class LoginController {

	private static final Logger logger = LogManager.getLogger(LoginController.class);

	@Resource(name = "loginService")
	private LoginService loginService;

	@RequestMapping(value = "/hello.do",method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> login(@RequestParam Map<String, Object> mapVo) {

		String login = "";

		login = loginService.login(mapVo);

		return JSONObject.parseObject(login);
	}

}

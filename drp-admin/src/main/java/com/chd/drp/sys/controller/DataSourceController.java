package com.chd.drp.sys.controller;

import java.util.Map;

import javax.annotation.Resource;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.chd.drp.sys.service.DataSourceService;

@Controller
public class DataSourceController {
	
	private static final Logger logger = LogManager.getLogger(DataSourceController.class);
	
	@Resource(name="dataSourceService")
    private DataSourceService dataSourceService;
	

	@RequestMapping(value = "/drp/sys/dataSource/queryDataSource.do",method = RequestMethod.POST)
	@ResponseBody
	public Map<String, Object> queryDataSource(@RequestParam Map<String, Object> mapVo,Model model) throws Exception{
		String queryJson = dataSourceService.queryDataSource(mapVo);
		return JSONObject.parseObject(queryJson);
	}

}

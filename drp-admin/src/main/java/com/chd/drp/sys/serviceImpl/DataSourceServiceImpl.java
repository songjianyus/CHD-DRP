package com.chd.drp.sys.serviceImpl;

import java.util.HashMap;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSON;
import com.chd.drp.sys.service.DataSourceService;

@Service("dataSourceService")
public class DataSourceServiceImpl implements DataSourceService {
	
	private static final Logger logger = LogManager.getLogger(DataSourceService.class);

	@Override
	public String queryDataSource(Map<String, Object> map) throws Exception {
		// TODO Auto-generated method stub
		Map<String, Object> mapVo = new HashMap<String,Object>();
		mapVo.put("driver", "oracle.jdbc.driver.OracleDriver");
		mapVo.put("url", "jdbc:oracle:thin:@localhost:1521:ORCL");
		mapVo.put("username", "hrp_yy");
		mapVo.put("password", "chd");
		return JSON.toJSONString(mapVo);
	}

}
package com.chd.drp.sys.serviceImpl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.alibaba.fastjson.JSON;
import com.chd.drp.sys.service.DataSourceService;

@Service("dataSourceService")
public class DataSourceServiceImpl implements DataSourceService{

	@Override
	public String queryDataSource(Map<String, Object> map) throws Exception {
		// TODO Auto-generated method stub
		List<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
		Map<String, Object> mapVo = new HashMap<String,Object>();
		mapVo.put("databaseid", "0001");
		mapVo.put("databasename", "ORACLE");
		mapVo.put("driver", "oracle.jdbc.driver.OracleDriver");
		mapVo.put("url", "jdbc:oracle:thin:@localhost:1521:ORCL");
		mapVo.put("username", "hrp_yy");
		mapVo.put("password", "chd");
	    list.add(mapVo);
		return JSON.toJSONString(list);
	}

}
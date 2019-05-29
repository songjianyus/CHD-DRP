package com.chd.drp.sys.dao;

import java.util.Map;

public interface LoginMapper {
   public Map<String, Object> queryLoginUserBycode(Map<String,Object> mapVo);
}

package com.chd.base.util;

import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Map;

/*
 * 设置平台数据源工具类
 * */
public class SetDataSourceUtil {
	
	private  static String driver = null;
	
	private  static String url = null;
	
	private  static String username = null;
	
	private  static String password = null;
	
	private  static CallableStatement callableStatement = null;
	
	private  static Connection conn = null;
	
	private  static PreparedStatement pst = null;
	
	private  static ResultSet rst = null;
	
	public SetDataSourceUtil(String driver,String url,String username,String password) {
		this.driver = driver;
		this.url = url;
		this.username = username;
		this.password = password;
	}
	
	/**  
     * 建立数据库连接  
     * @return 数据库连接  
     */    
    public static Connection getConnection() {    
        try {    
        	 // 加载数据库驱动程序    
        	try {
				Class.forName(driver);
			} catch (ClassNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
            // 获取连接    
        	conn = DriverManager.getConnection(url, username,password);    
        } catch (SQLException e) {    
            System.out.println(e.getMessage());    
        }    
        return conn;    
    }    
    
    /*
     * 验证数据库连接是否正确
     * */
    public static boolean checkOutConn(Map<String, Object> mapVo){
    	driver = mapVo.get("driver").toString();
    	url = mapVo.get("url").toString();
    	username = mapVo.get("username").toString();
    	password = mapVo.get("password").toString();
    	conn = getConnection();
    	if(null == conn) {return false;}return true;
    }
    
    /**  
     * 关闭所有资源  
     */    
    private void closeAll() {    
        if (rst != null) {    
            try {    
                rst.close();    
            } catch (SQLException e) {    
                System.out.println(e.getMessage());    
            }    
        }    
    
        if (pst != null) {    
            try {    
                pst.close();    
            } catch (SQLException e) {    
                System.out.println(e.getMessage());    
            }    
        }    
            
        if (callableStatement != null) {    
            try {    
                callableStatement.close();    
            } catch (SQLException e) {    
                System.out.println(e.getMessage());    
            }    
        }    
    

        if (conn != null) {    
            try {    
                conn.close();    
            } catch (SQLException e) {    
                System.out.println(e.getMessage());    
            }    
        }       
    }    
	
}

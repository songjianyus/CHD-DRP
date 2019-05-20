var menuData =  [ //节点
    {
        name: '个人设置'
        ,id:'user'
        ,children: [
        {
             name: '主页'
            ,id: 'user_home'
            ,url: 'loginController'
        },{
            name: '个人信息'
            ,id:"user_info"
       }
    ]
    }, {
        name: '11'
        ,children: [
            {
                name: 'QQ邮箱'
                ,id: '21'
                ,url: 'home.html'
               
            }, {
                name: '阿里云邮'
                ,id: '22'
                ,children: [
                    {
                        name: '收件箱'
                        ,id: '1005'
                        ,url: 'home.html'
                    }
                ]
            }
        ]
    }
]
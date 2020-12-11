> ##### 项目启动

  - npm run dev || yarn dev 


> ##### 项目结构

```
.
├── README.md
├── build
│   ├── build.js
│   ├── check-versions.js
│   ├── logo.png
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config
│   ├── dev.env.js
│   ├── env-config.js // 打包域名环境配置
│   ├── index.js // 开发期间设置项目启动地址，反向代理等
│   └── prod.env.js
├── index.html
├── package-lock.json
├── package.json
├── src
│   ├── api // 请求（一个页面请求很多的情况下，统一管理）
│   │   ├── demo 
│   │   │   └── home
│   │   │         └── index.js // demo项目下的home组件下的请求
│   │  
│   ├── assets // 动态文件资源，将会被webpack处理
│   │   ├── images
│   │   └── styles
│   │       └── base.scss
│   ├── components // 组件
│   │   ├── common
│   │   │   └── dialog
│   │   
│   ├── main.js // webpack 处理主入口
│   ├── entry // 页面入口，每个项目有独有的入口 （勿删）
│   │   ├── demo 
│   │   │   └── index.vue // 具体项目容器
│   │   └── index.vue // 承载每个项目的容器（勿删）
│   ├── pages // 每新建一个项目，里面必须有这个项目的router.js （勿删）
│   │   └── demo
│   │       ├── home
│   │       └── router.js
│   ├── router.js // 对每个项目内的路由进行整合处理 
│   └── plugin // 一些工具函数
│       └── request.js
│
└── static // 静态文件 webpack 不会相关压缩等处理 只做复制拷贝

```


> ##### 开发步骤

 - entry 文件夹下新建项目入口；
 - pages 文件夹下新建项目 项目下必须要有路由文件且命名为router.js 
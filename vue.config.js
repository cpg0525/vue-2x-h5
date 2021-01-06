const path = require("path");
module.exports = {
  // 打包 不同环境对应请求地址
  env: {
    test: {
      baseURL: "https://apiproxytest01.ucarinc.com/ucarincapiproxy"
    },
    test2: {
      baseURL: "http://domaintest02.com"
    },
    test3: {
      baseURL: "http://domaintest03.com"
    },
    pre: {
      baseURL: "http://domainpre.com"
    },
    production: {
      baseURL: "https://domainonline.cn"
    }
  },
  // 本地开发 代理设置
  proxyTable: {
    "/api": {
      target: "https://mktm.10101111.com",
      changeOrigin: true,
      pathRewrite: {
        // localhost:8080/api ----> 代理服务器地址/
        "^/api": "/"
      }
    }
  },
  title: "页面初始标题",
  // 本地开发 运行地址
  host: "0.0.0.0", // 默认localhost
  port: 8181, // 默认8080
  // 不常更新的包 不打包进bundle中 以减少打包之后的体积，提高打包效率。页面需通过cdn的方式引入相应被处理的包
  // externals: {
  //   vue: "Vue",
  //   vuex: "Vuex"
  // },
  // 别名
  alias: {
    assets: path.join(__dirname, "src/assets")
  }
};

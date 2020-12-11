module.exports = {
  dev: {
    baseURL: 'https://apiproxytest02.ucarinc.com/ucarincapiproxy'
    // baseURL: 'http://192.168.0.245:8088'
  },
  test: {
    baseURL: 'https://apiproxytest01.ucarinc.com/ucarincapiproxy'
  },
  test2: {
    baseURL: 'http://domaintest02.com'
  },
  test3: {
    baseURL: 'http://domaintest03.com'
  },
  pre: {
    baseURL: 'http://domainpre.com'
  },
  production: {
    baseURL: 'https://domainonline.cn'
  }
}

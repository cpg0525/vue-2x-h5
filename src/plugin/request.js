// import Vue from 'vue';
import axios from 'axios';

const env = process.env.NODE_ENV;

/* eslint-disable */
axios.defaults.baseURL = env !== 'dev' ? API_DOMAIN.baseURL : '';
axios.defaults.headers['Content-Type'] = 'application/json';

// 请求头信息获取及处理
const getParams = config => {
  const { url, method = 'POST', data = {} } = config;
  if (url && typeof url !== 'string') return false;

  try {
    const option = {
      url,
      method,
      data
    };
    const realConfig = {
      responseType: 'json',
      responseEncoding: 'utf8',
      timeout: 50000,
      ...option
    };
    return Promise.resolve(realConfig);
  } catch (error) {
    return Promise.reject(error);
  }
};

// 添加请求拦截器
axios.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    // 返回是什么数据格式 需要跟后端约定好 前端基于后端返回的数据各式二次加工
    const { status, result, msg } = response.data || {};
    if (response.status === 200) {
      if (status === 1) {
        return {
          status: 1,
          msg,
          content: result
        };
      }
      return {
        status: status,
        msg,
        content: result
      };
    }
    return {
      status: status,
      msg: '服务请求异常, 请稍后再试!',
      content: null
    };
  },
  function(error) {
    return Promise.reject(error);
  }
);

const api = async config => {
  const newConfig = await getParams(config);
  const request = axios.request(newConfig);
  return new Promise((resolve, reject) => {
    request
      .then(async response => {
        resolve(response);
      })
      .catch(error => {
        reject(error)
      });
  });
};

export default function(Vue) {
  Object.defineProperty(Vue.prototype, '$http', {
    value(params) {
      return api(params)
    },
  })
}


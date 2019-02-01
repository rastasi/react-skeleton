import Cookies from 'universal-cookie';
import queryString from 'query-string';
import axios from 'axios';

const getData = params => {
  if (!params) return;
  let numOfFiles = Object.keys(params).filter(key => params[key] instanceof File).length;
  if (numOfFiles === 0) return params;
  let data = new FormData();
  for (let key in params) {
    data.append(key, params[key]);
  }
  return data;
};

const search = options => {
  let params = options.filter || {};
  if (options.offset) params['offset'] = options.offset;
  let purgedParams = {};
  let paramKeys = Object.keys(params);
  for (let i in paramKeys) {
    let paramKey = paramKeys[i];
    let param = params[paramKey];
    if (!param || param.length === 0) continue;
    purgedParams[paramKey] = param;
  }
  if (Object.keys(purgedParams).length === 0) return '';
  return queryString.stringify(purgedParams);
};

const RestClient = {
  apiCall: options => {
    const cookies = new Cookies();
    const token = cookies.get('Authentication') || 'null';
    const prefix = options.prefix === 'disabled' ? '' : (options.prefix || '/api/');
    const url = [prefix, options.url, '?', search(options)].join('');
    let toAxios = {
      method: options.method,
      url: url,
      data: getData(options.params),
      headers: { Authentication: token }
    };
    if (options.headers) {
      toAxios.headers = Object.assign({}, options.headers, toAxios.headers);
    }
    return axios(toAxios);
  },

  get: (options) => {
    const extendedOptions = Object.assign({}, options, { method: 'get' });
    return RestClient.apiCall(extendedOptions);
  },

  post: (options) => {
    const extendedOptions = Object.assign({}, options, { method: 'post' });
    return RestClient.apiCall(extendedOptions);
  },

  put: (options) => {
    const extendedOptions = Object.assign({}, options, { method: 'put' });
    return RestClient.apiCall(extendedOptions);
  },

  delete: (options) => {
    const extendedOptions = Object.assign({}, options, { method: 'delete' });
    return RestClient.apiCall(extendedOptions);
  }
};

export default RestClient;

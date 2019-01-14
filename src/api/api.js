import axios from 'axios';
import config from '../config/config';

const contentType = (axios.defaults.headers.common['Content-Type'] =
  'application/json');
const accept = (axios.defaults.headers.common['Accept'] =
  'application/json; charset=utf-8');
const api = {
  get(params) {
    contentType;
    accept;
    return axios.get(`${config.ENDPOINT_BASE_URL}${params.url}`);
  },
  post(params) {
    contentType;
    accept;
    return axios.post(`${config.ENDPOINT_BASE_URL}${params.url}`, params.data);
  },
  put(params) {
    contentType;
    accept;
    return axios.put(`${config.ENDPOINT_BASE_URL}${params.url}`, params.data);
  },
  delete(params) {
    contentType;
    accept;
    return axios.delete(
      `${config.ENDPOINT_BASE_URL}${params.url}`,
      params.data
    );
  }
};
export default api;

import axios from "axios";
import config from "../config/config";

const api = {
  get(params) {
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["Accept"] = "application/json; charset=utf-8";
    return axios.get(`${config.ENDPOINT_BASE_URL}${params.url}`);
  },
  post(params) {
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["Accept"] = "application/json; charset=utf-8";
    return axios.post(`${config.ENDPOINT_BASE_URL}${params.url}`, params.data);
  },
  put(params) {
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["Accept"] = "application/json; charset=utf-8";
    return axios.put(`${config.ENDPOINT_BASE_URL}${params.url}`, params.data);
  },
  delete(params) {
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.headers.common["Accept"] = "application/json; charset=utf-8";
    return axios.delete(
      `${config.ENDPOINT_BASE_URL}${params.url}`,
      params.data
    );
  }
};
export default api;

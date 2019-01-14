const hostname = window && window.location && window.location.hostname;

let base_url = 'http://localhost:8080/';

if (hostname !== 'localhost') {
  base_url = '';
}
const config = {
  ENDPOINT_BASE_URL: '', //api base url
  BASE_URL: base_url //Page url
};

export default config;

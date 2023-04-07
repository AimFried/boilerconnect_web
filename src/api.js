import axios from 'axios';

let url = [
  'http://boilerconnect.ddns.net/api/',
  // 'http://localhost/public/api/'
]

const api = axios.create({
  baseURL: url[0],
});

export default api;
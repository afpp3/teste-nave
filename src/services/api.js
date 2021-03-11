import axios from 'axios';

const api = axios.create({
  baseURL: 'https://navedex-api.herokuapp.com/v1',
});
const token = localStorage.getItem('Nave:token');
api.defaults.headers.authorization = `Bearer ${token}`;

export default api;

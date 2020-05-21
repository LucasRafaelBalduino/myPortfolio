import axios from 'axios';

const api = axios.create({
  baseURL: 'https://myportfolio007.herokuapp.com',
});

export default api;

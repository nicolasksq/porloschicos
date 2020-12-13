import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://api-porloschicos.herokuapp.com',
});

export default api;

import api from './api';

export const postDataUser = (data) => api.post('/authenticate', data);

export const infoUser = 'hola';

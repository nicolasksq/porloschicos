import api from './api';

export const postDataUser = (data) => api.post('/api/authenticate', data);

export const infoUser = 'hola';

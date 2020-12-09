/* eslint-disable import/prefer-default-export */
import api from './api';

export const postDataUser = (data) => api.post('/api/authenticate', data);

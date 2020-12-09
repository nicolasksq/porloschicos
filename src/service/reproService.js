/* eslint-disable import/prefer-default-export */
import api from './api';

export const postDataUser = () => api.post('/api/authenticate');

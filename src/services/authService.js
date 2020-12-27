import api from './api';

export const loginService = (data) => api.post('/authenticate', data);
export const signUpService = (data) => api.post('/register', data);
export const postDataUser = (data) => api.post('/authenticate', data);
export const validateTokenService = (token) => api.get(`/validate?token=${token}`);

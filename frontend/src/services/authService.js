import api from './api'; // axios instance

export const registerUser = (data) => {
  return api.post('/auth/register', data);
};

export const loginUser = (data) => {
  return api.post('/auth/login', data);
};

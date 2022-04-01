import axios from 'axios';

// const API = axios.create({ baseURL: 'http://localhost:4000/users' });
const API = axios.create({
  baseURL: 'https://chingu-sleeptracker.herokuapp.com/users',
});

// simply calling localStorage.clear() does not destroy the token; need to fix this

API.interceptors.request.use((config) => {
  if (localStorage.getItem('profile')) {
    const token = JSON.parse(localStorage.getItem('profile')).data.token;
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  return config;
});

export const login = (formData) => API.post(`/login`, formData);
export const signup = (formData) => API.post(`/signup`, formData);

export const getSleepData = (id) => API.get(`/sleepData/${id}`);
// prettier-ignore
export const createSleep = (formData) => API.post(`/sleepData`, formData);
// prettier-ignore
export const updateSleep = (id, formData) => API.patch(`/sleepData/${id}`, formData);
export const removeSleep = (id) => API.delete(`/sleepData/${id}`);

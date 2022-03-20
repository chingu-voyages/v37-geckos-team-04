import axios from 'axios';

const url = 'http://localhost:4000/users';

export const login = (formData) => axios.post(`${url}/login`, formData);
export const signup = (formData) => axios.post(`${url}/signup`, formData);

export const getSleepData = (id) => axios.get(`${url}/sleepData/${id}`);
// prettier-ignore
export const createSleep = (formData) => axios.post(`${url}/sleepData`, formData);
// prettier-ignore
export const updateSleep = (id, formData) => axios.patch(`${url}/sleepData/${id}`, formData);
export const removeSleep = (id) => axios.delete(`${url}/sleepData/${id}`);

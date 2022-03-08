import axios from 'axios';

const url = 'http://localhost:4000/users';

export const login = async (formData) => axios.post(`${url}login`, formData);
export const signup = async (formData) => axios.post(`${url}/signup`, formData);

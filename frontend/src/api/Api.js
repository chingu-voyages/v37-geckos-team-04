import axios from 'axios';
// const axios = require('axios');

// const url = 'http://localhost:4000/users';
const url = 'http://localhost:4000';

// export const login = async (formData) => axios.post(`${url}/login`, formData);
export const login = (formData) => axios.post(`${url}/login`, formData);
// export const signup = async (formData) => axios.post(`${url}/signup`, formData);
export const signup = (formData) => axios.post(`${url}/signup`, formData);

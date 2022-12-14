// install axios package
// declar "proxy": "http://localhost:5000", in package.json

import axios from 'axios';

const API = axios.create({baseURL: "https://sammedia.herokuapp.com/"})


export const logIn = (formData) => API.post('/auth/login', formData)
export const signUp = (formData) => API.post('/auth/register', formData)
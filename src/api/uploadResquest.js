// upload image request

import axios from 'axios';

const API = axios.create({baseURL: "https://sammedia.herokuapp.com/"})

export const UploadImage = (data) => API.post('/upload', data)


export const uploadPost = (data) => API.post("/posts", data)
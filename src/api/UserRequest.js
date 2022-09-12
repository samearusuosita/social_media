// user request

import axios from 'axios';

const API = axios.create({baseURL: "http://localhost:5000"})


// middleware
 
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

export const getUser = (userId) => API.get(`/user/${userId}`)

export const updateUser = (id, FormData) => API.put(`/user/${id}`, FormData) 

export const getAllUser = () => API.get('/user')

// follow users

export const followUser = (id, data) => API.put(`/user/${id}/follow`, data)

//  unfollow users

export const unfollowUser = (id, data) => API.put(`/user/${id}/unfollow`, data)



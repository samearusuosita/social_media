// post request

import axios from 'axios';

const API = axios.create({baseURL: "https://sammedia.herokuapp.com/"})

export const getTimelinePosts = (id) => API.get(`/posts/${id}/timeline`)

export const likePost = (id, userId) => API.put(`/posts/${id}/like`, {userId: userId })

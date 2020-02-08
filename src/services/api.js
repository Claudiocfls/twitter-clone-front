import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_AUTH0_API_BASE_URL,
})

export default api;

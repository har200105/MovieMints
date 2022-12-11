import axios from "axios";

const client = axios.create({
  // baseURL: "https://reviewmov.herokuapp.com/api",
  baseURL:"http://localhost:5000/api"
});

client.interceptors.request.use(req => {
  if (localStorage.getItem('auth-token')) {
    req.headers.Authorization = `Bearer ${localStorage.getItem('auth-token')}`;
  }
  return req;
});


export default client;

const axios = require('axios');

export default axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});
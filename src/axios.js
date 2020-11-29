import axios from 'axios';

const AUTH_TOKEN = btoa(process.env.CLIENT_ID + ':' + process.env.CLIENT_SECRET);

axios.defaults.baseURL = 'https://www.udemy.com/api-2.0/';
axios.defaults.headers.common['Authorization'] = `Basic ${AUTH_TOKEN}`;
axios.defaults.headers.post['Content-Type'] = 'application/json';

console.log(process.env.CLIENT_ID);
console.log(AUTH_TOKEN);

export default axios;
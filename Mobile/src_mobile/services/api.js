import axios from 'axios';

const api = axios.create({
    baseURL: 'http://189.39.201.131:3333',
});

export default api;
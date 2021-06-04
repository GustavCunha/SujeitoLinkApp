import axios from 'axios';
//Key a7e27f2148ba9d162d710baf65e62d7bf13e4582

export const key = 'a7e27f2148ba9d162d710baf65e62d7bf13e4582';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${key}` 
    }
});

export default api;
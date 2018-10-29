import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.predic8.de:443/shop/products/'
});

export default api;
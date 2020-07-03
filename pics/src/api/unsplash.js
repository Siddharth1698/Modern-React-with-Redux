import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { 
        Authorization: 'Client-ID EsaImyFBc60Cc4rztCdR6TvTS2sKWAKfjwXKj0uTxbA'
        }
});
import axios from 'axios';

const KEY = 'AIzaSyAvQ-lu2fotjcjXoKgOXXMv7JkKcFu6B8o';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

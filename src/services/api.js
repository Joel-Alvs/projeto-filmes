import axios from 'axios';


//https://api.themoviedb.org/3/
//https://api.themoviedb.org/3/movie/now_playing?api_key=490c01454c9807d662fe4273b6f12e98

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;
import axios from 'axios';

const config = {headers: {accept: 'application/json', Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmUxZjE0YzYyZTQzOWIwMjM4MDJkNTE0ZWZjMjdjNSIsInN1YiI6IjY1MDg5YTU1NDJkOGE1MDEzODliNGM0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NUIY0vNhpSOb1uS96BLUFvsxx4l6wSNfRO_sClDFpj4`,}}

class moviesApi {
    async getAllMovies() {
        const { data } = await axios.get('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc', config)
        return data
    }
    async getMovieTrailers(id) {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=pt-BR`, config)
        return data
    }
    async getMovieImages(id) {
        const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}/images?language=pt`, config)
        return data
    }
}
export default new moviesApi
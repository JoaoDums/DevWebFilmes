import axios from 'axios';

const config = {headers: {accept: 'application/json', Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmUxZjE0YzYyZTQzOWIwMjM4MDJkNTE0ZWZjMjdjNSIsInN1YiI6IjY1MDg5YTU1NDJkOGE1MDEzODliNGM0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NUIY0vNhpSOb1uS96BLUFvsxx4l6wSNfRO_sClDFpj4`,}}

class moviesApi {
    async getAllMovies() {
        const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', config)
        const data = await response.json()
        return data.results
    }
}

export default new moviesApi
import { defineStore } from 'pinia';
import moviesApi from '../api/movies';

export const useMovieStore = defineStore('movies', {
    state: () => ({
        movies: [],
        backdrops: [],
        posters: [],
    }),
    actions: {
        async getMoviesData() {
            const responseMovies = await moviesApi.getAllMovies();
            this.movies = responseMovies.results;

            for (let movie of this.movies) {
                this.backdrops.push(movie.backdrop_path);
                this.posters.push(movie.poster_path);
            };
        }
    },
});
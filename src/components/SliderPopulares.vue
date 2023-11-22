<script setup>

import moviesApi from '../api/movies'
import { onMounted, ref } from 'vue';

const movies = ref([]);
const movieImages = ref([]);
const movieSlider = ref();
const currentMovie = ref(0)

async function getMoviesAndImages() {
    const responseMovies = await moviesApi.getAllMovies()
    movies.value = responseMovies.results
    console.log(movies.value)
    movieImages.value = []

    for (let movie of movies.value) {
        movieImages.value.push(movie.backdrop_path);
    }
    console.log(movieImages.value)
};

function changeSlide(index) {

    if (currentMovie.value == 0 && index == -1 || currentMovie.value == movies.value.length - 1) {
        currentMovie.value = 0
    } else {
        currentMovie.value += index
    }
    movieSlider.value[currentMovie.value].scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    
        console.log(currentMovie.value)
};


onMounted(() => {
    getMoviesAndImages();
})

</script>

<template>
    <div class="container">
        <div class="left navigation" @click="changeSlide(-1)">...</div>
        <div class="slideContainer">
            <div class="slider" v-for="image, index of movieImages" :key="index" ref="movieSlider">
                <img :src="`https://image.tmdb.org/t/p/original/${image}`" alt="">
            </div>
        </div>
        <div class="right navigation" @click="changeSlide(1)">...</div>
    </div>
</template>

<style scoped>

.container {
    display: flex;
    width: 100%;
    color: white;
}
.slider {
    position: relative;
    display: flex;
    justify-content: center;
    margin-left: 10%;
}

.slideContainer {
    width: 100%;
    display: flex;
    overflow-x: scroll;
    margin: auto;
    height: 700px;
    color: white;
    scrollbar-width: none;
}

.navigation {
    position: relative;
    cursor: pointer;
    padding: 20px;
    border: 1px solid;
    z-index: 9999;
    height: 10px;
    margin-top: 20%;
}

</style>
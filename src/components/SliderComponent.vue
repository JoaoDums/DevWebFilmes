<script setup>

import { ref } from 'vue';
import { useMovieStore } from '@/stores/movieData';

const movieStore = new useMovieStore()

const movies = movieStore.movies;
const backdrops = movieStore.backdrops;
const movieSlider = ref();
const currentMovie = ref(0)

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


</script>

<template>
    <div class="container">
        <div class="left navigation" @click="changeSlide(-1)">...</div>
        <div class="slideContainer">
            <div class="slider" v-for="image, index of backdrops" :key="index" ref="movieSlider">
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
    margin-top: -10px;
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
    padding: 2%;
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

img {
    border: 3px solid rgba(255, 255, 255, 0.856);
    border-radius: 5px;
    box-shadow: 5px 5px 5px black;
}

</style>
<script setup>

import { useMovieStore } from '../stores/movieData';

const movieStore = new useMovieStore;

const posters = movieStore.posters

</script>

<template>
    
    <div class="rowContainer">
        <div class="row">
            <div class="movie" v-for="poster, index of posters" :key="index">
                <img :src="`https://image.tmdb.org/t/p/original/${poster}`" alt="">
            </div>
        </div>
        <div class="row">
            <div class="movie" v-for="poster, index of posters" :key="index">
                <img :src="`https://image.tmdb.org/t/p/original/${poster}`" alt="">
            </div>
        </div>
    </div>

</template>

<style scoped>

.rowContainer {
    display: flex;
    flex-direction: column;
    row-gap: 100px;
    margin-top: 5%;
    width: 100%;
    align-items: center;
}

.row {
    display: flex;
    overflow-x: scroll;
    width: 99%;
    gap: 1%;
}

img {
    width: 250px;
}

</style>
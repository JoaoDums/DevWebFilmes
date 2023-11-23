<script setup>

import HeaderComponent from '../components/HeaderComponent.vue';
import SliderComponent from '../components/SliderComponent.vue';
import MovieRowComponent from '../components/MovieRowComponent.vue';
import { useMovieStore } from '../stores/movieData';
import { onMounted } from 'vue';

const movieStore = new useMovieStore;

onMounted(() => {
    movieStore.getMoviesData();
})

</script>

<template>
        <header-component />
        <slider-component />
        <movie-row-component />
</template>

<style scoped>
h1 {
        color: white;
        text-align: center;
}
</style>
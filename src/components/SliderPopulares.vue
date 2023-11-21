<script setup>

import moviesApi from '../api/movies'
import { onMounted, ref } from 'vue';

const movies = ref([])

async function getMovies() {
    const response = await moviesApi.get('/movie/popular')
    movies.value = response
    console.log(movies.value)
}

onMounted(() => {
    getMovies();
})

</script>

<template></template>
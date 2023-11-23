<script setup>

</script>

<template>
    <header>
        <h1>Deutsch's Movies</h1>
        <div class="links">
            <router-link to="/filmes">Filmes</router-link>
            <router-link to="/series">Séries</router-link>
            <router-link to="/tv">TV</router-link>
        </div>
    </header>
</template>

<style scoped>

header {
    height: 50px;
    color: #fff;
    padding: 10px;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: sticky;
    top: 0;
    background-color: rgba(19, 19, 19, 0.247);
    z-index: 3;
}

h1 {
    position: absolute;
}

.links {
    display: flex;
    gap: 15%;
    text-align: center;
    justify-content: center;
    width: 100%;
}

a {
    color: white;
    text-decoration: none;
}

</style>
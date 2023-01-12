<template>
  <div>
    <h1>Hello chat!</h1>
    <article v-for="episode in data">
      <h2>{{ episode.title }}</h2>
      <p>{{ episode.description }}</p>
      <NuxtLink :href="`/episode/${episode.slug}`">details &rarr;</NuxtLink>
    </article>
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/schedule');
</script>

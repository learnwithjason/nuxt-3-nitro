<template>
  <h1>{{ data?.title }}</h1>
  <NuxtImg
    :src="`${data?.uri}/poster.jpg`"
    :alt="data?.title"
    sizes="sm:100vw md:500px"
    width="500"
    height="281"
  />
  <p>{{ data?.description }}</p>
</template>

<script setup lang="ts">
const { slug } = useRoute().params;
const { data } = await useFetch(`/api/episode/${slug}`);
</script>

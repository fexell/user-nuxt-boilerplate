<script setup>
  import authMiddleware from '~/middleware/auth';

  const route                               = useRoute()

  //await authMiddleware( route, null )
</script>

<template>
  <main>
    <NuxtPage />
  </main>
</template>
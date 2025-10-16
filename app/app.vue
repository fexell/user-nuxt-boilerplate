<script setup>
  const route                               = useRoute()

  const currentLayout                       = computed(() => route.meta.layout || 'default')
</script>

<template>
  <div>
    <NuxtLayout>
      <template v-if="currentLayout !== 'auth'">
        <NuxtPage />
      </template>

      <template v-else>
        
      </template>
    </NuxtLayout>
  </div>
</template>

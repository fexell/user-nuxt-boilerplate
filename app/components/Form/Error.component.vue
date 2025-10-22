<script setup>
  const props                               = defineProps({
    errorMessage                            : {
      type                                  : String,
      required                              : false,
    },
  })
</script>

<template>
  <div v-if='errorMessage'>
    <div>
      <div class='block p-4 rounded-full mb-4 bg-red-200'>
        <p class='block text-center text-red-600'>{{ props.errorMessage || 'Error occured' }}</p>
      </div>
    </div>
  </div>
</template>
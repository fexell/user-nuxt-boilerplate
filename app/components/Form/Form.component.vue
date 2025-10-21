<script setup>
  const props                               = defineProps({
    fn                                      : {
      type                                  : Function,
      required                              : false,
      default                               : () => {},
    },
  })
</script>

<template>
  <div class='w-[500px]'>
    <form @submit.prevent='props.fn'>
      <slot />
    </form>
  </div>
</template>
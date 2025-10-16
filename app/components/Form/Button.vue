<script setup>
  const props = defineProps({
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: 'button',
    },
  })
</script>

<template>
  <div>
    <button
      class='block w-full p-4 mb-4 text-white rounded bg-blue-600 hover:bg-blue-700 cursor-pointer'
      :type='$props.type'>{{ props.text }}</button>
  </div>
</template>
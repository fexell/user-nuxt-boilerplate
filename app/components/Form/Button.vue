<script setup>
  const props                               = defineProps({
    text                                    : {
      type                                  : String,
      required                              : true,
    },
    type                                    : {
      type                                  : String,
      required                              : false,
      default                               : 'button',
    },
    disabled                                : {
      type                                  : Boolean,
    }
  })
</script>

<template>
  <div>
    <button
      class='block w-full p-4 mb-4 text-white rounded-full bg-blue-600 hover:bg-blue-700 cursor-pointer disabled:hover:bg-blue-600 disabled:cursor-not-allowed'
      :class='[ ( props.disabled ) ? "disabled:opacity-50" : "" ]'
      :disabled='props.disabled'
      :type='props.type'>{{ props.text }}</button>
  </div>
</template>
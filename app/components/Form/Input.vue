<script setup>
  const props = defineProps({
    type: {
      type: String,
      required: false,
      default: 'text',
    },
    modelValue: {
      type: [String, Number],
      required: false,
      default: '',
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
  })

  const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div>
    <input
      class='block w-full p-4 mb-4 rounded bg-neutral-100'
      :type='props.type'
      :value='props.modelValue'
      :placeholder='props.placeholder'
      :name='props.name'
      @input='emit("update:modelValue", $event.target.value)' />
  </div>
</template>
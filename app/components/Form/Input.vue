<script setup>
  const props                               = defineProps({
    type                                    : {
      type                                  : String,
      required                              : false,
      default                               : 'text',
    },
    modelValue                              : {
      type                                  : [String, Number],
      required                              : false,
      default                               : '',
    },
    placeholder                             : {
      type                                  : String,
      required                              : false,
      default                               : '',
    },
    name                                    : {
      type                                  : String,
      required                              : true,
    },
    invalid                                 : {
      type                                  : RegExp,
    },
    icon                                    : {
      type                                  : String,
      required                              : false,
    },
  })

  const touched                             = ref(false)

  const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class='block relative'>
    <div v-if='props.icon' class='absolute left-6 top-1/2 transform -translate-y-1/2'>
      <div>
        <font-awesome :icon='props.icon' />
      </div>
    </div>
    <input
      class='block w-full p-4 mb-4 border-2 outline-0 rounded-full bg-neutral-100 focus:border-blue-600'
      :class='[
        ( touched && props.invalid && !props.invalid.test( props.modelValue ) ) ? "border-red-600" : "border-transparent",
        ( props.icon ) ? "pl-14" : ""
      ]'
      :type='props.type'
      :value='props.modelValue'
      :placeholder='props.placeholder'
      :name='props.name'
      @input='emit("update:modelValue", $event.target.value)'
      @blur='touched = true' />
  </div>
</template>
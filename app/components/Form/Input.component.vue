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
    remember                                : {
      type                                  : Boolean,
      required                              : false,
      default                               : false,
    },
  })

  const inputValue                          = ref( props.modelValue )
  const isClient                            = ref( false )

  onMounted(() => {
    isClient.value                          = true

    if( props.remember ) {
      const savedValue                      = localStorage.getItem( props.name )

      if( savedValue ) {
        inputValue.value                    = savedValue

        emit( 'update:modelValue', savedValue )
      }
    }
  })

  const touched                             = ref( false )

  const emit = defineEmits([ 'update:modelValue' ])

  const handleOnInput                       = ( e ) => {
    if( props.remember )
      localStorage.setItem( props.name, e.target.value )

    emit( 'update:modelValue', e.target.value )
  }
</script>

<template>
  <div
    v-if='isClient'
    class='block relative'>
    <div v-if='props.icon' class='absolute left-6 top-1/2 transform -translate-y-1/2'>
      <div>
        <font-awesome
          :icon='props.icon'
          class='text-neutral-500'
          :class='[ ( touched && props.invalid && !props.invalid.test( props.modelValue ) ) ? "text-red-600" : "" ]' />
      </div>
    </div>
    <input
      class='block w-full p-4 mb-4 border-2 outline-0 rounded-full bg-neutral-100 focus:border-blue-600'
      :class='[
        ( touched && props.invalid && !props.invalid.test( props.modelValue ) ) ? "!border-red-600" : "border-transparent",
        ( props.icon ) ? "pl-14" : ""
      ]'
      :type='props.type'
      :value='props.modelValue'
      :placeholder='props.placeholder'
      :name='props.name'
      @input='handleOnInput'
      @blur='touched = true' />
  </div>
</template>
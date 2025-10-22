<script setup>
  import { useCookie } from '#app'

  import LoginImage from '~/assets/images/Login.svg'

  const { $apiFetch }                       = useNuxtApp()

  definePageMeta({
    layout                                  : false,
  })

  const formData                            = ref({
    email                                   : '',
    password                                : '',
  })
  
  const handleLogin                         = async () => {
    const auth                              = useAuthStore()

    try {
      const data                                = new FormData()
      data.append( 'email', formData.value.email )
      data.append( 'password', formData.value.password )

      const response                        = await $apiFetch( '/auth/login', { method: 'POST', body: data } )
    } catch ( error ) {
      console.warn( error.message )
    }
  }

  const handleLogout                        = async () => {
    try {
      await $apiFetch( '/auth/logout', { method: 'POST' } )
    } catch ( error ) {
      console.warn( error.message )
    }
  }
</script>

<template>
  <NuxtLayout
  name='auth'
  title='Welcome back!'
  subtitle='Fill in the form to log in'
  footerText="Don't have an account?"
  footerLinkText='Sign up.'>
    <template #form>
      <FormComponent :fn='handleLogin'>
        <FormInputComponent
          name='email'
          v-model='formData.email'
          type='email'
          placeholder='Email'
          icon='at'
          :invalid='/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i'
          :remember='true' />
        <FormInputComponent
          name='password'
          v-model='formData.password'
          type='password'
          icon='lock'
          placeholder='Password' />
        <FormButtonComponent text='Login' type='submit' :disabled='!formData.email || !formData.password' />
      </FormComponent>
    </template>
    <template #image>
      <img :src='LoginImage' class='w-xl' />
    </template>
  </NuxtLayout>
</template>

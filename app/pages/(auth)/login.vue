<script setup>
  import FormErrorComponent from '~/components/Form/Error.component'

  import LoginImage from '~/assets/images/Login.svg'

  useHead({
    title                                   : 'Login',
  })

  const errorMessage                        = ref( '' )
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
      errorMessage.value                      = error?.message ?? 'An unexpected error occured'
    }
  }
</script>

<template>
  <NuxtLayout
    name='auth'
    title='Welcome back!'
    subtitle='Fill in the form to log in'
    footerText="Don't have an account?"
    footerTo='/signup'
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
        <FormErrorComponent :errorMessage='errorMessage' />
        <FormButtonComponent text='Login' type='submit' :disabled='!formData.email || !formData.password' />
      </FormComponent>
    </template>
    <template #image>
      <img :src='LoginImage' class='w-xl' />
    </template>
  </NuxtLayout>
</template>

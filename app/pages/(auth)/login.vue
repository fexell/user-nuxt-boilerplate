<script setup>
  import LoginImage from '~/assets/images/Login.svg'

  definePageMeta({
    layout                                  : false,
  })

  const formData                            = ref({
    email                                   : '',
    password                                : '',
  })

  const data                                = new FormData()

  data.append('email', formData.value.email)
  data.append('password', formData.value.password)

  const handleLogin                         = async () => {

  }
</script>

<template>
  <NuxtLayout name='auth'>
    <template #form>
      <header class='mb-4'>
        <div>
          <h1 class='text-4xl text-center'>Welcome back!</h1>
          <h3 class='text-lg text-center'>Fill in the form to log in</h3>
        </div>
      </header>
      <Form>
        <FormInput
          name='email'
          v-model='formData.email'
          type='email'
          placeholder='Email'
          icon='at'
          :invalid='/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i' />
        <FormInput
          name='password'
          v-model='formData.password'
          type='password'
          icon='lock'
          placeholder='Password' />
        <FormButton text='Login' type='submit' :disabled='!formData.email || !formData.password' />
      </Form>
      <footer>
        <div>
          <p class='text-center'>Don't have an account? <NuxtLink to='/signup' class='text-blue-600 hover:underline'>Sign up</NuxtLink></p>
        </div>
      </footer>
    </template>
    <template #image>
      <img :src='LoginImage' class='w-xl' />
    </template>
  </NuxtLayout>
</template>

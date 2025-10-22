<script setup>
  import SignUpImage from '~/assets/images/SignUp.svg'

  useHead({
    title                                   : 'Sign up',
  })

  definePageMeta({
    layout                                  : false,
  })

  const formData                            = reactive({
    email                                   : '',
    username                                : '',
    forename                                : '',
    surname                                 : '',
    password                                : '',
    passwordConfirm                         : '',
  })

  const isValid                             = computed(() => {
    return formData.email &&
    formData.username &&
    formData.forename &&
    formData.surname &&
    formData.password &&
    formData.passwordConfirm
  })

  const handleSignup                        = async () => {
    
  }
</script>

<template>
  <NuxtLayout
    name='auth'
    title='Sign up'
    subtitle='Fill in the form to sign up'
    footerText="Already have an account?"
    footerTo='/login'
    footerLinkText='Log in.'>
    <template #form>
      <FormComponent :fn='handleSignup'>
        <FormInputComponent
          name='email'
          v-model='formData.email'
          type='email'
          placeholder='Email'
          icon='at'
          :invalid='/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i'
          :remember='true' />
        <FormInputComponent
          name='username'
          v-model='formData.username'
          type='text'
          placeholder='Username'
          icon='circle-user'
          :invalid='/^[a-zA-Z0-9_]{3,16}$/i' />
        <FormInputComponent
          name='forename'
          v-model='formData.forename'
          type='text'
          placeholder='Forename'
          icon='signature'
          :invalid='/^[a-zA-Z0-9_]{3,16}$/i' />
        <FormInputComponent
          name='surname'
          v-model='formData.surname'
          type='text'
          placeholder='Surname'
          icon='signature'
          :invalid='/^[a-zA-Z0-9_]{3,16}$/i' />
        <FormInputComponent
          name='password'
          v-model='formData.password'
          type='password'
          placeholder='Password'
          icon='lock' />
        <FormInputComponent
          name='passwordConfirm'
          v-model='formData.passwordConfirm'
          type='password'
          placeholder='Confirm password'
          icon='lock' />
        <FormButtonComponent text='Sign up' type='submit' :disabled='!isValid' />
      </FormComponent>
    </template>
    <template #image>
      <img :src='SignUpImage' class='w-xl' />
    </template>
  </NuxtLayout>
</template>

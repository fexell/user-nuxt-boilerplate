import { defineStore } from 'pinia'
import { useCookie } from '#app'

import { useReactiveCookie } from '#imports'

export const useAuthStore                   = defineStore( 'auth', () => {
  const userId                              = useReactiveCookie( 'userId' ) || null

  const setUserId                           = ( value ) => userId.value = value

  return { userId, setUserId }
})
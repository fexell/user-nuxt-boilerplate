import { defineStore } from 'pinia'
import { useCookie } from '#app'

export const useAuthStore                   = defineStore('auth', () => {
  const userIdCookie                        = useCookie('userId')
  const userId                              = userIdCookie

  const setUserId                           = ( value ) => userIdCookie.value = value

  return { userId, setUserId }
})
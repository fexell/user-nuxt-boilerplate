import { defineStore } from 'pinia'
import { useCookie } from '#app'

export const useAuthStore                   = defineStore('auth', () => {
  const userIdCookie                        = useCookie('userId')
  const userId                              = userIdCookie

  const setUserId                           = ( value ) => userId.value = value

  return { userId, setUserId }
})


export default defineNuxtPlugin(async ( nuxtApp ) => {
  const config                              = useRuntimeConfig()
  const csrfEndpoint                        = `${ config.public.apiBase }/csrf`

  let csrfToken

  if( process.client ) {
    try {
      const { token }                       = await $fetch(csrfEndpoint, {
        credentials                         : 'include',
      })

      csrfToken                             = token

    } catch ( error ) {
      console.warn('Could not fetch CSRF token:', error)
    }
  }

  const apiFetch = $fetch.create({
    baseURL                                 : config.public.apiBase,
    credentials                             : 'include',

    headers                                 : {
      'Accept'                              : 'application/json',
    },

    onRequest                               : ({ options }) => {
      if( csrfToken ) {
        options.headers                     = {
          ...options.headers,
          'x-csrf-token'                    : csrfToken
        }
      }
    },

    onResponseError                         : ({ response }) => {
      if( response.status === 403 ) {
        console.warn('CSRF token is invalid or missing.')
      }
    },
  })

  return {
    provide                                 : {
      apiFetch                              : apiFetch,
    }
  }
})
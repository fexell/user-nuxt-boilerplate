

export default defineNuxtRouteMiddleware(( to, from ) => {
  const auth                                = useAuthStore()

  const publicPages                         = [ '/login', '/signup' ]

  if( !auth.userId && !publicPages.includes( to.path ) )
    return navigateTo( '/login' )

  if( auth.userId && publicPages.includes( to.path ) )
    return navigateTo( '/' )
})

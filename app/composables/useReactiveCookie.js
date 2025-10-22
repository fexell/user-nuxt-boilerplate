

export function useReactiveCookie( name, interval = 500 ) {
  const cookie                              = useCookie( name )
  const value                               = ref( cookie.value )

  let timer

  onMounted(() => {
    timer                                   = setInterval(() => {
      const newValue                        = useCookie( name ).value

      if( newValue !== value.value ) {
        value.value                         = newValue
        cookie.value                        = newValue
      }
    }, interval)
  })

  onUnmounted(() => clearInterval( timer ))

  return value
}
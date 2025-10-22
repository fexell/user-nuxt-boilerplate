<script setup>
  const route                               = useRoute()
  const auth                                = useAuthStore()
  const router                              = useRouter()

  const currentLayout                       = computed(() => route.meta.layout || 'default')

  watch(
    () => auth.userId,
    ( newValue, oldValue ) => {
      const publicPages                     = [ '/login', '/signup' ]

      if( !newValue && !publicPages.includes( route.path ) )
        router.push( '/login' )

      if( newValue && publicPages.includes( route.path ) )
        router.push( '/' )
    }, {
      immediate                             : true
    }
  )
</script>

<template>
  <div>
    <NuxtLayout>
      <template v-if="currentLayout !== 'auth'">
        <NuxtPage />
      </template>

      <template v-else>
        
      </template>
    </NuxtLayout>
  </div>
</template>

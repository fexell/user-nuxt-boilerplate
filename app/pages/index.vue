<script setup>
  const { $apiFetch }                       = useNuxtApp()

  const handleLogout                        = async () => {
    const auth                              = useAuthStore()

    try {
      await $apiFetch( '/auth/logout', { method: 'POST' } )
    } catch ( error ) {
      console.warn(error)
    }
  }
</script>

<template>
  <div class='flex min-h-screen max-h-screen justify-center items-center'>
    <button
      class='block w-64 p-4 mb-4 text-white rounded-full bg-red-600 hover:bg-red-700 cursor-pointer'
      @click='handleLogout'>Logout</button>
  </div>
</template>
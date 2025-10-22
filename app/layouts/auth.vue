<script setup>
  defineProps({
    title                                   : {
      type                                  : String,
      required                              : true,
    },
    subtitle                                : {
      type                                  : String,
      required                              : true,
    },
    footerText                              : {
      type                                  : String,
      required                              : true,
    },
    footerLinkText                          : {
      type                                  : String,
      required                              : true,
    },
  })
</script>

<template>
  <main class='w-full min-h-screen max-h-screen'>
    <div class='flex flex-row w-full min-h-screen max-h-screen'>

      <!-- LEFT -->
      <div class='flex-1'>
        <div class='flex flex-col justify-center items-center w-full h-full'>
          <header class='mb-4'>
            <div>
              <h1 class='text-4xl text-center'>{{ title }}</h1>
              <h3 class='text-lg text-center'>{{ subtitle }}</h3>
            </div>
          </header>
          <section>
            <div>
              <slot name='form' />
            </div>
          </section>
          <footer>
            <div>
              <p class='text-center'>{{ footerText }} <NuxtLink to='/signup' class='text-blue-600 hover:underline'>{{ footerLinkText }}</NuxtLink></p>
            </div>
          </footer>
        </div>
      </div>

      <!-- RIGHT -->
      <div class='flex flex-1 justify-center items-center bg-neutral-100'>
        <div>
          <slot name='image' />
        </div>
      </div>
      
    </div>
  </main>
</template>
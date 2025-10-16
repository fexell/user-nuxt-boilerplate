

<template>
  <main class='w-full min-h-screen max-h-screen'>
    <div class='flex flex-row w-full min-h-screen max-h-screen'>

      <!-- LEFT -->
      <div class='flex-1'>
        <div class='flex flex-col justify-center items-center w-full h-full'>
          <slot name='form' />
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
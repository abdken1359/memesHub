<template>
  <div>
    <NuxtRouteAnnouncer />
   <NuxtLayout/>
  </div>
</template>
<script lang="ts" setup>
useHead({
  htmlAttrs:{
    lang:'en',
  },
  link:[
    {
      rel:'icon',type:'image/png',href:'/logoDark.png',
    }
  ]
  
})
</script>

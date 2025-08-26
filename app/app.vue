<template>
  <div>
    <NuxtRouteAnnouncer />
    <SmallComponentsImageViewer />
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
      rel:'icon',type:'image/png',href:'/logoLight.png',
    }
  ]
  
})
</script>

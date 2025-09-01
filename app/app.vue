<template>
  <div>
    <NuxtRouteAnnouncer />
    <ClientOnly>
    <Transition name="snackbar">
    <UISnackbar v-show="UI.isSnackbarOpened"/>
    </Transition>
    <SmallComponentsImageViewer />
    </ClientOnly>
   <NuxtLayout/>
  </div>
</template>
<script lang="ts" setup>
const UI=useUIStore();
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

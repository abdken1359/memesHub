<template>
    <nav class=" main-nav">
       <div class="mr-auto">
            <NuxtLink to="/" class="simple-flex">
                <ClientOnly>
                <NuxtImg :src="decideLogoImg" alt="Logo" class=" logo-img" format="webp"/>
                </ClientOnly>
                <span>MemesHub</span>
            </NuxtLink>
       </div> 
       <div class="ml-auto">
            <SmallComponentsThemeToggler/>
       </div>
    </nav>
</template>
<script setup lang="ts">
const isDark=useDark();
const toggle=useToggle(isDark);
const decideLogoImg=computed(()=>{
    return isDark.value?'/logodark.png':'/logoLight.png';
})
onMounted(()=>{
    toggle();
})
</script>
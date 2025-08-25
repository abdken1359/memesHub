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
       <div class="ml-auto simple-flex gap-2">
        <NuxtLink 
        href="https://github.com/abdken1359/memesHub" 
        aria-label="See project on github"
        class="btn btn-ghost p-3"
        >
            <Icon name="mingcute:github-line" class="icon"/>
        </NuxtLink>
        <ClientOnly>
            <SmallComponentsThemeToggler/>
        </ClientOnly>
       </div>
    </nav>
</template>
<script setup lang="ts">
const isDark=useDark();

const decideLogoImg=computed(()=>{
    return isDark.value?'/logodark.png':'/logoLight.png';
})

</script>
<template>
    <div class=" a-container">
        <SmallComponentsPageIndicator title="Random Memes" icon="mingcute:random-line"/>
    </div>
</template>
<script setup lang="ts">
useSeoMeta({
    title:'Random Memes - MemesHub',
    ogTitle:'Random Memes - MemesHub',
    description:'Find the best random memes at memeHub. You can also save your favorite memes without an account, in your browser.',
    ogDescription:'Find the best random memes at memeHub. You can also save your favorite memes without an account, in your browser.',
    ogUrl:'https://memeshub.vercel.app/random_memes',
    ogImage:'/logoLight.png',
    ogImageAlt:'Logo',
    ogType:'website',
    
})
onBeforeRouteLeave(()=>{
    console.log("Leaving route...")
})
</script>
<template>
    <div class="a-container">
        
           <small-components-page-indicator title="Home" icon="mingcute:home-1-line"/>
           <small-components-main-hero/>
            <page-sections-random-meme-presentation/>
        
        
        <h2 style=" margin-top: 1000px;">Find me!!</h2>
    </div>
</template>
<script setup lang="ts">
useSeoMeta({
    title:'MemesHub - Free Memes for y\'all!',
    ogTitle:'MemesHub - Free Memes for y\'all!',
    description:'Find the best random memes at memeHub. You can also save your favorite memes without an account, in your browser.',
    ogDescription:'Find the best random memes at memeHub. You can also save your favorite memes without an account, in your browser.',
    ogUrl:'https://memeshub.vercel.app',
    ogImage:'/logoLight.png',
    ogImageAlt:'Logo',
    ogType:'website',
    
})
onBeforeRouteLeave(()=>{
    console.log("Leaving route...")
})
</script>
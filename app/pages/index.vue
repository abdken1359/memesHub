<template>
    <div class="a-container">
        
           <small-components-page-indicator title="Home" icon="mingcute:home-1-line"/>
           <small-components-main-hero/>
            <page-sections-random-meme-presentation/>
            <page-sections-choose-subreddits/>
        
        
        
    </div>
</template>
<script setup lang="ts">
useSeoMeta({
    title:'MemesHub - Free Memes for y\'all!',
    ogTitle:'MemesHub - Free Memes for y\'all!',
    description:'Find the best reddit memes at MemesHub. You can also save your favorite memes without an account, in your browser.',
    ogDescription:'Find the best reddit memes at MemesHub. You can also save your favorite memes without an account, in your browser.',
    ogUrl:'https://memeshub.vercel.app',
    ogImage:'/logoLight.png',
    ogImageAlt:'Logo',
    ogType:'website',
    
})

</script>
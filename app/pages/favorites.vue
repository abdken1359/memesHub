<template>
    <div class="a-container">
        <small-components-page-indicator title="Favorites" icon="mingcute:star-line"/>
        <section>
          
            <p class="text-accent mb-4">{{ contents.favoriteMemes.length }} favorites.</p>
           <page-sections-memes-looper :loaded-memes="contents.favoriteMemes"/>
            </section>
        
        
    </div>
</template>
<script setup lang="ts">
useSeoMeta({
    title:'Favorite Memes - MemesHub',
    ogTitle:'Favorite Memes - MemesHub',
    description:'Explore your saved favorite memes.',
    ogDescription:'Explore your saved favorite memes.',
    ogUrl:'https://memeshub.vercel.app/favorites',
    ogImage:'/logoLight.png',
    ogImageAlt:'Logo',
    ogType:'website',
    
})
const contents=useContentStore()
onMounted(()=>{
    contents.loadFavoriteMemes()
})
</script>
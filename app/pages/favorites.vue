<template>
    <div class="a-container">
        <section>
            <h1>Favorite Memes!!</h1>
            <pre class=" code">{{ memes }}</pre>
            </section>
        <section class="space-x-4">
             <button class="btn-primary mt-4" @click="()=>refresh()">Refresh</button>
             <button class="btn-secondary mt-4">Secondary</button>
        </section>
        <h2 style=" margin-top: 1000px;">Find me!!</h2>
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
const {memes,refresh}=await useFetchMemes()
</script>
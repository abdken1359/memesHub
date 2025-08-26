<template>
    <section>
        <div class="hero-box" :style="{backgroundImage:`url(${memesImages[2]?.src})`}">
            <div class="hero-overlay"></div>
            <div class="hero-content">
                <span>Free Memes for y'all!!</span>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
const memesImages=ref([
    {
        id:1,
        src:"/Images/memesTemplates/meme1.png",
        alt:"Meme Template 1"
    },
    {
        id:2,
        src:"/Images/memesTemplates/meme2.webp",
        alt:"Meme Template 2"
    },
    {
        id:3,
        src:"/Images/memesTemplates/meme3.jpg",
        alt:"Meme Template 3"
    },
    {
        id:4,
        src:"/Images/memesTemplates/meme4.jpg",
        alt:"Meme Template 4"
    },
    {
        id:5,
        src:"/Images/memesTemplates/meme5.webp",
        alt:"Meme Template 5"
    },
    
])
const randomImage=computed(()=>{
    return memesImages.value[Math.floor(Math.random()*memesImages.value.length)];
})
</script>
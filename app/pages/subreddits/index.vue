<template>
    <div class="a-container">
        <SmallComponentsPageIndicator :title="title" icon="mingcute:reddit-line"/>
        <section>
            <h2>{{ subredditQuery }}</h2>
        </section>

    </div>
</template>
<script setup lang="ts">
useSeoMeta({
    title:'Subreddits - MemesHub',
    ogTitle:'Subreddits - MemesHub',
    description:'Find the best reddit memes at MemesHub. You can also save your favorite memes without an account, in your browser.',
    ogDescription:'Find the best reddit memes at MemesHub. You can also save your favorite memes without an account, in your browser.',
    ogUrl:'https://memeshub.vercel.app/subreddits',
    ogImage:'/logoLight.png',
    ogImageAlt:'Logo',
    ogType:'website',
    
})
const route=useRoute();
const subredditQuery=computed(()=>{
    return route.query.subreddit;
})
const title=computed(()=>{
    if(subredditQuery.value){
        return `Subreddits / ${subredditQuery.value}`;
    }else{
        return "Subreddits";
    }
})
</script>
<template>
    <div>
        <div class="simple-grid">
            <template v-for="subreddit in subreddits" :key="subreddit.id">
                <NuxtLink 
                :to="`/subreddits?subreddit=${subreddit.name}`" 
                class="card block hover:border-secondary
                focus:no-underline focus:border-secondary
                " 
                >
                
                    <div class=" card-body">
                        <NuxtImg :src="subreddit.image" :alt="subreddit.imageAlt" class="w-3/4"/>
                        <p class="text-center mt-4">{{subreddit.name}}</p>
                    </div>
               
                </NuxtLink>
            </template>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    count:{
        type:Number,
        required:true,
    }
})
const contents=useContentStore()
const subreddits=computed(()=>{
    return contents.supportedMemeSubreddits.slice(0,props.count);
})

</script>
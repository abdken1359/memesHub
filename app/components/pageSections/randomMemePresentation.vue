<template>
    <section class="mt-10">
        <h2>Random Memes</h2>
        <UISkeletonMemes v-if="isLoading" :count="3" />
       <div v-else>
         <div v-if="!anyError" class="my-4">
           <MemesLooper :loaded-memes="loadedMemes"/>
        </div>
        <div v-else>
            <p class="text-error">Oh no! A damn error occurred!</p>
            <button class="btn-primary mt-4" @click="fetchSixMemes()">
                Retry
            </button>
        </div>
        <div class="simple-flex justify-end mt-4 ">
            <NuxtLink to="/random_memes" class="btn btn-primary">
                See More Memes
                <Icon name="mingcute:arrow-right-circle-fill" class="icon"/>

            </NuxtLink>
        </div>
       </div>

    </section>
</template>
<script setup lang="ts">
import MemesLooper from './memesLooper.vue';

type Meme = {
  postLink: string;
  subreddit: string;
  title: string;
  url: string;
  nsfw: boolean;
  spoiler: boolean;
  author: string;
  ups: number;
  preview: string[];
};


const isLoading=ref(true);
const loadedMemes=ref<Meme[]>([]);
const anyError=ref(false);
const fetchSixMemes=async()=>{
    isLoading.value=true
     anyError.value=false
     loadedMemes.value=[]
    setTimeout(async ()=>{
        
        try{
            const {data:dataa}=await useFetchMemes(50);
            const {data:datab}=await useFetchMemes(50);
            const {data:datac}=await useFetchMemes(50);
            const {data:datad}=await useFetchMemes(50);
            const allMemes = [...dataa.memes, ...datab.memes, ...datac.memes, ...datad.memes];
            
            const finalMemes=shuffleArray(removeArrayDuplicates(allMemes));
            if (Array.isArray(finalMemes)){
            loadedMemes.value=finalMemes.filter((meme)=>{
                return meme.nsfw===false;
            }).slice(0,6)
            anyError.value=false
            }


        }catch(e){
            console.log(e)
            anyError.value=true
            loadedMemes.value=[]
        }finally{
            isLoading.value=false
        }
    },1000)
}
onMounted(async ()=>{
    await fetchSixMemes()
})
</script>

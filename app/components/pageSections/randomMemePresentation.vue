<template>
    <section class="mt-10">
        <h2>Random Memes</h2>
        <UISkeletonMemes v-if="isLoading" :count="3" />
       <div v-else>
         <div v-if="!anyError" class="my-4">
           <div class=" simple-grid">
            <template v-for="(meme,index) in loadedMemes" :key="index">
                <div class=" card">
                <div class="h-[50vh]">
                   <NuxtImg 
                   :src="meme.url" class="h-full w-full object-fill 
                   cursor-zoom-in" alt="Meme Image" 
                   @click.stop="UI.openImageViewer(meme.url,'Meme Image')"/>
                    
                </div>
                <div class=" card-body">
                    <p>
                        <span class="font-semibold">Subreddit: </span>
                        <NuxtLink :to="`/subreddits?subreddit=${meme.subreddit}`">
                            {{ meme.subreddit }}
                        </NuxtLink>
                     </p>
                     <div class="simple-flex justify-start">
                        <button class="btn-ghost-primary mb-0 mt-4 p-3 rounded-full">
                            <Icon name="mingcute:star-line" class="icon"/>
                        </button>
                     </div>
                </div>
            </div>
            </template>
            
           </div>
        </div>
        <div v-else>
            <p class="text-error">Oh no! A damn error occurred!</p>
            <button class="btn-primary mt-4" @click="fetchSixMemes()">
                Retry
            </button>
        </div>
       </div>
    </section>
</template>
<script setup lang="ts">
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

const UI=useUIStore()
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

            const extractedMemes=dataa.memes.concat(datab.memes,datac.memes,datad.memes);
            const finalMemes=shuffleArray(extractedMemes);
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
    },2000)
}
onMounted(async ()=>{
    await fetchSixMemes()
})
</script>

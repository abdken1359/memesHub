<template>
    <div>
                   <div class=" simple-grid">
            <template v-for="(meme,index) in props.loadedMemes" :key="index">
                <div class=" card">
                <div class="h-[30vh] bg-black flex items-center justify-center">
                   <NuxtImg 
                   :src="meme.url" class="max-h-full max-w-full object-contain
                   cursor-zoom-in" alt="Meme Image" 
                   @click.stop="UI.openImageViewer(meme.url,'Meme Image')"/>
                    
                </div>
                <div class=" card-body">
                    <p>
                        <span class="font-semibold">Title: </span>
                        <span class=" line-clamp-1">{{ meme.title }}</span>
                    </p>
                                        <p>
                        <span class="font-semibold">Author: </span>
                        <span>{{ meme.author }}</span>
                    </p>
                                        <p>
                        <span class="font-semibold">Ups: </span>
                        <span>{{ meme.ups }}</span>
                    </p>
                    <p>
                        <span class="font-semibold">Subreddit: </span>
                        <NuxtLink :to="`/subreddits?subreddit=${meme.subreddit}`">
                            {{ meme.subreddit }}
                        </NuxtLink>
                     </p>
                     
                </div>
                <div class=" card-footer">
                       
                            <button 
                            v-show="!isFavorite(meme)"
                            class="btn-ghost-primary  p-3 rounded-full"
                            aria-label="Add Meme to Favorites" 
                            @click="contents.addMemeToFavorites(meme)"
                            >
                            <Icon  name="mingcute:star-line" class="icon" />
                            </button>

                            <button 
                            v-show="isFavorite(meme)"
                            class="btn-ghost-primary  p-3 rounded-full"
                            aria-label="Add Meme to Favorites" 
                            @click="contents.removeMemeFromFavorites(meme.postLink)"
                            >
                            
                            <Icon 
                            name="mingcute:star-fill" 
                            
                            class="icon text-primary dark:text-primary-dark" />
                            

                            </button>
                            <NuxtLink 
                            :href="meme.postLink" 
                            target="_blank"
                            class="btn btn-ghost-secondary  p-3 rounded-full"
                            aria-label="See original post"
                            >
                            <Icon name="mingcute:external-link-line" class="icon"/>
                            </NuxtLink>
                       

                      
                </div>
            </div>
            </template>
            
           </div>
    </div>
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
const props = defineProps<{
    loadedMemes:Meme[]

}>();
const UI=useUIStore()
const contents=useContentStore();
const isFavorite=(meme:Meme):boolean=>{
    return contents.favoriteMemes.includes(meme);

}
</script>
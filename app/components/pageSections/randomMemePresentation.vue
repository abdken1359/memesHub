<template>
    <section class="mt-10">
        <h2>Random Memes</h2>
        <UISkeletonMemes v-if="isLoading" :count="3" />
       <div v-else>
         <div v-if="!anyError" class="my-4">
            <p class="text-success">Memes Loaded successfully!</p>
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
const isLoading=ref(true);
const loadedMemes=ref<unknown>([]);
const anyError=ref(false);
const fetchSixMemes=async()=>{
    isLoading.value=true
     anyError.value=false
     loadedMemes.value=[]
    setTimeout(async ()=>{
        
        try{
            const {data}=await useFetchMemes(6);
            loadedMemes.value=data
            anyError.value=false


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

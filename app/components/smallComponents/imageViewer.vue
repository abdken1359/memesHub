<template>
    <div>
    <Transition name="fade">
    <div v-show="UI.isImageViewerOpened" class="modal" >
        <button class="modal-close" aria-label="Close Modal" @click="UI.closeImageViewer()">
            <Icon name="mingcute:close-fill" class="icon"/>
        </button>
        <Transition name="scale">
        <NuxtImg 
        v-show="UI.isImageViewerOpened" 
        ref="modalImage" 
        :src="UI.imageSrc" 
        :alt="UI.imageAlt" 
        class=" modal-image" 
        @click="UI.closeImageViewer()"
        />
        </Transition>
    </div>
    </Transition>
    </div>
</template>
<script setup lang="ts">
const UI=useUIStore();
const modalImage=ref<HTMLImageElement|null>(null)
useEventListener(window,'keydown',(e)=>{
    if(e.key==='Escape'){
        UI.closeImageViewer();
    }

})
</script>
<template>
    <div >
        <div class="simple-grid mt-4">
            <template v-for="value in count" :key="value">
                <div>
                     <div class="meme-skeleton-header" aria-label="Loading..."></div>
                    <div class="meme-skeleton-footer"></div>
                </div>
            </template>
        </div>
    </div>
</template>
<script setup lang="ts">

defineProps({
    count:{
        type:Number,
        required:true

    }
})

</script>
<template>
    <nav class=" main-nav">
       <div class="mr-auto">
            <NuxtLink to="/">
                <span>MemesHub</span>
            </NuxtLink>
       </div> 
       <div class="ml-auto">
        <button class=" btn-primary" @click="toggle()">
            Share
        </button>
       </div>
    </nav>
</template>
<script setup lang="ts">
const isDark=useDark();
const toggle=useToggle(isDark);
</script>
<template>
    <div>
        <div class="mb-4 simple-flex justify-start text-accent">
            <Icon :name="icon"/>
            <span class=" current-page-text">{{title}}</span>
        </div>
    </div>
</template>
<script setup lang="ts">
    defineProps({
        title:{
            type:String,
            required:true
        },
        icon:{
            type:String,
            required:true,
        }
    })
</script>
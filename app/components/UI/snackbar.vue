<template>
    <div >
        <div class=" alert" :class="`alert-${UI.snackbarStatus}`">
            <span>{{ UI.snackbarContent }}</span>
        </div>
    </div>
</template>
<script setup lang="ts">
const UI=useUIStore()
</script>
<template>
    <div>

        <button 
        :class="isDark?'btn-ghost-secondary':'btn-ghost-primary'" 
        aria-label="Toggle theme"
        class="p-3" @click="toggle()">
            <Icon v-show="!isDark" name="mingcute:sun-line" class="icon" />
            <Icon v-show="isDark" name="mingcute:moon-line" class="icon"/>
        </button>
    </div>
</template>
<script setup lang="ts">
const isDark=useDark();
const toggle=useToggle(isDark);
</script>
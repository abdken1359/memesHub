<template>
    <aside>
        <nav class="sidebar-nav">
            <template v-for="link in contents.navLinks" :key="link.id">
                <NuxtLink :to="link.href" class="sidebar-nav-item" active-class=" sidebar-nav-item-active">
                    <Icon :name="link.icon" class="icon"/>
                    <span>{{ link.name }}</span>
                </NuxtLink>
            </template>
        </nav>
    </aside>
</template>
<script setup lang="ts">
const contents=useContentStore();
</script>
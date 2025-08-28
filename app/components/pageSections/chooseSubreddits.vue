<template>
    <section class="mt-10">
        <h2>Subreddits</h2>
        <PageSectionsSubredditLooper :count="6"/>
        <div class="simple-flex mt-4 justify-end">
            <NuxtLink to="/subreddits" class=" btn btn-primary">
                See More Subreddits
                <Icon name="mingcute:arrow-right-circle-fill" class="icon"/>
            </NuxtLink>
        </div>
    </section>
</template>
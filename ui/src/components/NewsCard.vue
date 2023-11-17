<script setup>
defineProps({
    news: {
        type: Object,
        required: true
    },
    idx: {
        type: String,
    }
})
</script>

<template>
    <router-link class="newsLink" :to="{ name: 'news', params: { id: news.id } }">
        <div class="newsCard">
            <h4>{{ news.title }}</h4>
            <p>{{ news.dateCreated }}</p>
        </div>
    </router-link>
</template>

<style scoped>
.newsCard {
    border: 1px solid black;
    width: 300px;
    margin-bottom: 20px;
}

.newsCard:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.newsLink {
    color: #2c3e50;
    text-decoration: none;
}
</style>

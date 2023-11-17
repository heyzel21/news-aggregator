<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

onMounted(async () => {
    const res = await axios.get(`http://localhost:8700/news/${router.params.id}`)
    news.value = res.data
})

const router = useRoute()

const news = ref(null)

</script>

<template>
    <div v-if="news" class="news">
        <h1>{{ news.title }}</h1>
        <div class="details">
            <p>u/{{ news.username }} on {{ news.dateCreated }}</p>
            <p>{{ news.content }}</p>
        </div>
        <router-link :to="{ name: 'home' }">go back</router-link>
    </div>
</template>

<style scoped>
.headers {
    text-align: left;
}

.news a {
    text-decoration: none;
    color: #00c059;
}

@media (min-width: 768px) {
    .news {
        padding: 0 200px;
    }
}

@media (min-width: 1440px) {
    .news {
        padding: 0 500px;
    }
}
</style>
<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import swal from 'sweetalert'
import NewsCard from '../components/NewsCard.vue'

onMounted(async () => {
  const user = JSON.parse(localStorage.getItem('user'))
  news.value.userId = user?.id

  try {
    const res = await axios.get('http://localhost:8700/news')
    newsList.value = res.data
  } catch (error) {
    console.log(error)
  }
})

const news = ref({
  title: '',
  content: '',
  userId: null
})

const newsList = ref(null)

async function createNews() {
  try {
    const res = await axios.post('http://localhost:8700/news/create', news.value)
    swal('Success', res.data, 'success')

  } catch (error) {
    swal('Failed', error.response.data, 'error')
  }
}

</script>

<template>
  <div class="home">
    <h1>Aggregated news for you...</h1>
    <form v-if="news.userId" @submit.prevent="createNews()" class="auth">
      <h2>Create News</h2>
      <div>
        <span>Title</span>
        <input required type="text" v-model="news.title" />
      </div>
      <div>
        <span>Content</span>
        <textarea required v-model="news.content"></textarea>
      </div>
      <button>Create</button>
    </form>
    <br />
    <NewsCard v-for="(news, idx) in newsList" :key="idx" :news="news" />
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.auth {
  margin-top: 20px;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.auth h2 {
  margin-bottom: 20px;
  color: #333;
}

.auth div {
  margin-bottom: 15px;
}

.auth input,
.auth textarea {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.auth button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.auth button:hover {
  background-color: #45a049;
}

.post {
  border: 1px solid black;
  width: 200px;
  margin-bottom: 20px;
  padding: 20px;
}

.post div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
</style>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import swal from 'sweetalert'

onMounted(async () => {
  const localUser = JSON.parse(localStorage.getItem('user'))
  user.value = localUser
  news.value.userId = localUser?.id

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

const user = ref(null)

const newsList = ref(null)

// async function createNews() {
//   try {
//     const res = await axios.post('http://localhost:8700/news/create', news.value)
//     swal('Success', res.data, 'success')

//   } catch (error) {
//     swal('Failed', error.response.data, 'error')
//   }
// }

</script>

<template>
  <div class="profile">
    <h1>User Profile</h1>
    <div v-if="user" class="card">
      <h1>{{ `${user.firstName} ${user.lastName}` }}</h1>
      <p class="title">{{ `u/${user.username}` }}</p>
      <p>{{ `${user.age} years old` }}</p>
      <p>{{ `${user.gender}` }}</p>
      <p>{{ `from ${user.city}` }}</p>
    </div>
  </div>
</template>


<style scoped>
.profile {
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 400px;
  margin: 0 auto;
}

.profile h1 {
  margin-bottom: 20px;
  color: #333;
}

.profile-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f4;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.detail-item {
  margin-bottom: 15px;
}

.detail-item span {
  font-weight: bold;
  margin-right: 10px;
  color: #333;
}

.detail-item p {
  margin: 0;
  color: #555;
}
</style>
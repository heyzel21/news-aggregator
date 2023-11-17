<script setup>
import { ref } from 'vue'
import axios from 'axios'
import swal from "sweetalert";
import { useRouter } from 'vue-router'

const router = useRouter();

const isRegister = ref(false)

const signUp = ref({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    city: ''
})

const signIn = ref({
    username: '',
    password: '',
})

async function handleLogin() {
    try {
        const res = await axios.post('http://localhost:8700/auth/login', signIn.value)
        localStorage.setItem('user', JSON.stringify(res.data))

        router.push('/')
    } catch (error) {
        swal('Failed', error.response.data, 'error')
    }
}

async function handleSignup() {
    try {
        const res = await axios.post('http://localhost:8700/auth/register', signUp.value)
        swal('Success', res.data, 'success')

        isRegister.value = false
    } catch (error) {
        swal('Failed', error.response.data, 'error')
    }
}

</script>

<template>
    <div class="container">

        <form @submit.prevent="handleLogin()" v-if="!isRegister" class="auth">
            <h2>LOGIN</h2>
            <div>
                <span>username</span>
                <input required type="text" v-model="signIn.username" />
            </div>
            <div>
                <span>password</span>
                <input required type="password" v-model="signIn.password" />
            </div>
            <button>Login</button>
        </form>

        <form @submit.prevent="handleSignup()" v-else class="auth">
            <h2>CREATE AN ACCOUNT</h2>
            <div>
                <span>username</span>
                <input required type="text" v-model="signUp.username" />
            </div>
            <div>
                <span>password</span>
                <input required type="password" v-model="signUp.password" />
            </div>
            <div>
                <span>first name</span>
                <input required type="text" v-model="signUp.firstName" />
            </div>
            <div>
                <span>last name</span>
                <input required type="text" v-model="signUp.lastName" />
            </div>
            <div>
                <span>age</span>
                <input required type="number" v-model="signUp.age" />
            </div>
            <div>
                <span>gender</span>
                <select v-model="signUp.gender">
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
            </div>
            <div>
                <span>city</span>
                <input required type="text" v-model="signUp.city" />
            </div>
            <button>Sign Up</button>
        </form>
        <p v-if="isRegister">already have an account? <span style="cursor: pointer;"
                @click="isRegister = !isRegister">login</span> here.</p>
        <p v-else>got no account? <span style="cursor: pointer;" @click="isRegister = !isRegister">signup</span> here.</p>

    </div>
</template>
  
<style scoped>
.container .auth div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

select {
    width: 180px;
    height: 23px;
}
</style>
  
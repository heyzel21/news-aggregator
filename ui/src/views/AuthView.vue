<script setup>
import { ref } from 'vue'
import axios from 'axios'
import swal from 'sweetalert'
import { useRouter } from 'vue-router'

const router = useRouter()

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
        <transition name="fade" mode="out-in">
            <form key="login" @submit.prevent="handleLogin()" v-if="!isRegister" class="auth">
                <h2>LOGIN</h2>
                <div>
                    <span>Username</span>
                    <input required type="text" v-model="signIn.username" />
                </div>
                <div>
                    <span>Password</span>
                    <input required type="password" v-model="signIn.password" />
                </div>
                <button>Login</button>
            </form>

            <form key="signup" @submit.prevent="handleSignup()" v-else class="auth">
                <h2>CREATE AN ACCOUNT</h2>
                <div>
                    <span>Username</span>
                    <input required type="text" v-model="signUp.username" />
                </div>
                <div>
                    <span>Password</span>
                    <input required type="password" v-model="signUp.password" />
                </div>
                <div>
                    <span>First Name</span>
                    <input required type="text" v-model="signUp.firstName" />
                </div>
                <div>
                    <span>Last Name</span>
                    <input required type="text" v-model="signUp.lastName" />
                </div>
                <div>
                    <span>Age</span>
                    <input required type="number" v-model="signUp.age" />
                </div>
                <div>
                    <span>Gender</span>
                    <select v-model="signUp.gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div>
                    <span>City</span>
                    <input required type="text" v-model="signUp.city" />
                </div>
                <button>Sign Up</button>
            </form>
        </transition>

        <p v-if="isRegister">Already have an account? <span @click="isRegister = !isRegister">Login</span> here.</p>
        <p v-else>Got no account? <span @click="isRegister = !isRegister">Sign up</span> here.</p>
    </div>
</template>

<style scoped>
.container {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
}

.auth {
    margin-top: 90px;
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
.auth select {
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

p {
    margin-top: 20px;
    font-size: 14px;
}

p span {
    color: #4caf50;
    cursor: pointer;
}
</style>
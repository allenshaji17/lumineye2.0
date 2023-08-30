<template>
    <div>
        <navbar></navbar> <!-- Add the Navbar component here -->
        <section class="login-page">
            <div class="login-box">
                <h2>Login</h2>
                <form @submit.prevent="login">
                    <div class="input-group">
                        <label for="username">Username</label>
                        <input type="text" id="username" v-model="username" required>
                    </div>
                    <div class="input-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" v-model="password" required>
                    </div>
                    <button type="submit" class="login-button">Login</button>
                </form>
            </div>
        </section>
    </div>
</template>

<script>
import Navbar from '@/Pages/NavBar.vue';
export default {
    components: {
        Navbar
    },
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        login() {
            // Implement your login logic here
            // For now, let's just log the entered credentials
            console.log('Username:', this.username);
            console.log('Password:', this.password);
        }
    }
};
</script>

<style scoped>
.login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
}

.login-box {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    width: 300px;
}

h2 {
    text-align: center;
    margin-bottom: 20px;
}

.input-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input[type="text"],
input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.login-button {
    background-color: #3498db;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    font-weight: bold;
    transition: background-color 0.2s;
}

.login-button:hover {
    background-color: #2980b9;
}
</style>

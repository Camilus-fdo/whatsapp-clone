<template>
    <div class="auth-user-login">
        <div class="auth-user-login__container">
        <form class="auth-user-login__form">
            <h2>Login</h2>
            <input v-model="userDetials.email" type="text" placeholder="Username" class="input-field" required>
            <input v-model="userDetials.password" type="password" placeholder="Password" class="input-field" required>
            <button type="submit" @click.prevent="login" class="btn">Login</button>
        </form>
        </div>
    </div>
</template>
<script>
import AuthService from '../../services/api/auth/AuthService'
export default {
    name: 'UserLogin',
    data() {
        return {
            userDetials: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        async login() {
            try {
                const authService = new AuthService()
                await authService.signIn(this.userDetials)

                this.$router.push({ name: 'main' })
            } catch (error) {
                alert('Login failed!')
                console.error('Error')
            }
        }
    }
}
</script>
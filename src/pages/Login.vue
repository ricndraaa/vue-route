<template>
    <div>
        Login
        <br/>
        <input type="email" v-model="username">
        <br/>
        <input type="password" v-model="password">
        <br/>
        <button @click="linkToProfile">Login</button>
    </div>
</template>
<script>
export default {
    name: "LoginPage",
    data () {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        linkToProfile () {
            this.$router.push(`/profile?username=${this.username}&password=${this.password}`)
        }
    }
}
</script>
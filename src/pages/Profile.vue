<template>
    <div>
        <h1>Profile</h1>
        <h1>Name: {{ username }}</h1>
        <h1>Password: {{ password }}</h1>
    </div>
</template>
<script>
export default {
    name: "ProfilePage",
    data () {
        return{
            username: this.$route.query.username,
            password: this.$route.query.password
        }
    }
}
</script>
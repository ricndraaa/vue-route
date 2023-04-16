<template>
    <div>
        <ul>
            <li><a @click="clickToHomePage">Home</a></li>
            <li><a @click="clickToAboutPage">About</a></li>
            <li><a @click="clickToLoginPage">Login</a></li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "HeaderNavbar",
    methods: {
      clickToLoginPage () {
        this.$router.push("/login")
      },
      clickToAboutPage () {
        this.$router.push("/about")
      },
      clickToHomePage () {
        this.$router.push("/")
      }
    }
}
</script>
<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}
</style>
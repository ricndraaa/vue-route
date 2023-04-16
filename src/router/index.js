import { createRouter, createWebHistory } from "vue-router"

import LoginPage from "@/pages/Login.vue"
import ProfilePage from "@/pages/Profile.vue"
import HomePage from "@/pages/Home.vue"
import AboutPage from "@/pages/About.vue"

const routes = [

{
    path: "/",
    name: "Home",
    component: HomePage
},
{
    path: "/about",
    name: "About",
    component: AboutPage
},
{
    path: "/login",
    name: "Login",
    component: LoginPage
},
{
    path: "/profile",
    name: "Profile",
    component: ProfilePage
}
]

const router = createRouter ({
    history: createWebHistory(),
    routes: routes
})

export default router;
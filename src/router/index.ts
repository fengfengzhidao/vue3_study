import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminHome from '../views/admin/home.vue'
import infoHome from '../views/admin/info.vue'
import AdminView from '../views/admin/index.vue'
import type {RouteRecordRaw} from "vue-router";
import {Message} from "@arco-design/web-vue";

const routes: Readonly<RouteRecordRaw[]> = [
    {
        path: '/', // 生效的路径
        name: 'home', // 路由的name
        component: HomeView, // 路由对应的视图组件，
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue'),
    },
    {
        path: "/admin",
        name: "admin",
        component: AdminView,
        meta:{
            title: "后台",
            login: true
        },
        children: [
            {
                path: "", // /admin
                name: "adminHome",
                component: AdminHome,
                meta:{
                    title: "后台Home"
                },
            },
            {
                path: "info", // /admin/info
                name: "infoHome",
                component: infoHome,
                meta:{
                    title: "后台Info",
                    login: false
                },
            }
        ]
    },
    {
        path: "/admin1",
        name: "admin1",
        children: [
            {
                path: "", // /admin
                name: "adminHome1",
                component: AdminHome,
            },
            {
                path: "info", // /admin/info
                name: "infoHome1",
                component: infoHome,
            }
        ]
    },
    {
        path: "/article/:id",
        name: "articleDetail",
        component: () => import("@/views/article_detail.vue"),
        beforeEnter(to, form, next){
            console.log("组件内 to", to)
            const id = Number(to.params.id)
            if (isNaN(id)){
                Message.warning("参数错误")
                next(form)
                return
            }
            next()
        }
    },
    {
        path: "/login", // /admin/info
        name: "login",
        component: () => import("@/views/login.vue"),
    }
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
})


// 路由前置守卫
router.beforeEach((to, from, next)=>{
    console.log("前置 from", from)
    console.log("前置 to", to)
    if (to.meta.login){
        // 这个路由需要登录
        const token = localStorage.getItem("token")
        if (!token){
            Message.warning("需要登录")
            next("/login")
            return
        }
    }
    next()
})

// 路由后置守卫
router.afterEach((to, from)=>{
    console.log("后置 from", from)
    console.log("后置 to", to)

})

export default router

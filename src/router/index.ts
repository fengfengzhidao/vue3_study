import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminHome from '../views/admin/home.vue'
import infoHome from '../views/admin/info.vue'
import AdminView from '../views/admin/index.vue'
import type {RouteRecordRaw} from "vue-router";

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
    }
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
})

export default router

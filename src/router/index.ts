import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'
import type {RouteRecordRaw} from "vue-router";

const routes: Readonly<RouteRecordRaw[]> = [
    {
        path: "/",
        name: "index",
        component: () => import("@/views/layout/web/index.vue")
    },
    {
        path: "/admin",
        name: "admin",
        component: () => import("@/views/layout/admin/index.vue"),
        children: [
            {
                path: "",
                name: "home",
                component: () => import("@/views/layout/admin/home/index.vue")
            },
            {
                path: "article",
                name: "article",
                children: [
                    {
                        path: "list",
                        name: "articleList",
                        component: () => import("@/views/layout/admin/article/list.vue")
                    }
                ]
            },
            {
                path: "user",
                name: "user",
                children: [
                    {
                        path: "list",
                        name: "userList",
                        component: () => import("@/views/layout/admin/user/list.vue")
                    }
                ]
            }
        ]
    }
]


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
})

export default router

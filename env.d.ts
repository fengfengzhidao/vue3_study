/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_SERVER_URL: string
}

import "vue-router"

declare module "vue-router"{
    interface RouteMeta {
        title?: string
        login?: boolean
    }
}
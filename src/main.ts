import './assets/main.css'
import "@/assets/css/iconfont.css"
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import router from './router'
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/reset.css';
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(ArcoVue)
// app.use(Antd)
// app.use(ElementPlus)

// v-debounce
app.directive("debounce", {
    mounted(el: HTMLElement, binding){
        const timeout = binding.arg || 500
        el.func = ()=>{
            if (el.timer){
                clearTimeout(el.timer)
            }
            el.timer = setTimeout(binding.value, timeout)
        }

        el.addEventListener("click", el.func)
    },
    beforeUnmount(el:HTMLElement, binding){
        clearTimeout(el.timer)
        el.removeEventListener("click", el.func)
    }
})


app.mount('#app')

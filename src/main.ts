import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

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

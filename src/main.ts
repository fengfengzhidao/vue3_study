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
        let timer = null
        const timeout = binding.arg || 500

        el.addEventListener("click", ()=>{
            if (timer){
                clearTimeout(timer)
            }
            timer = setTimeout(binding.value, timeout)
        })
    },
    beforeUnmount(){

    }
})


app.mount('#app')

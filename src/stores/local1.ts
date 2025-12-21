import {defineStore} from "pinia";
import {ref} from "vue";


// export const useLocal1Store = defineStore("local1", {
//     state(){
//         return {
//             name: "",
//             addr: ""
//         }
//     },
//     persist: true
// })

// export const useLocal1Store = defineStore("local1", () => {
//     const name = ref("")
//     const addr = ref("")
//     return {name, addr}
// }, {persist: true})


export const useLocal1Store = defineStore("local1", () => {
    const name = ref("")
    const addr = ref("")
    return {name, addr}
}, {
    persist: {
        key: "xxx-id", // 1. 自定义存储的 key（默认是 Store ID）
        storage: sessionStorage, // 2. 自定义存储介质（默认 localStorage，可选 sessionStorage）
        // pick: ["name"], // 哪些字段做持久化
        // omit: ["name"], // 除了这些字段都做持久化
        serializer: { // 自定义序列化/反序列化（比如加密/解密）
            // 存储时序列化（默认 JSON.stringify）
            serialize: (value) => {
                // 示例：简单加密（实际项目用专业加密库）
                return btoa(JSON.stringify(value))
            },
            // 读取时反序列化（默认 JSON.parse）
            deserialize: (value) => {
                return JSON.parse(atob(value))
            }
        }
    }
})
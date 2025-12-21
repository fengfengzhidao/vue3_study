import {defineStore} from "pinia";


export const useLocalStore = defineStore("local", {
    state(){
        return {
            name: "",
            addr: ""
        }
    }
})

export function load(){
    const store = useLocalStore()

    const data = localStorage.getItem(store.$id)
    if (data){
        try {
            const _data = JSON.parse(data)
            store.$patch(_data)
        }catch (e) {
            console.log(e)
        }
    }

    store.$subscribe((mutation, state) =>{
        // console.log("$subscribe", mutation.storeId, state)
        localStorage.setItem(mutation.storeId, JSON.stringify(state))
    })
}


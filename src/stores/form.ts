import {defineStore} from "pinia";

export const useFormStore = defineStore("form", {
    state() {
        return {
            user: {
                name: ""
            },
            age: 0,
            addr: "",
        }
    },
    actions: {
        setName(name: string): Object {
            this.user.name = name
            return {name: name}
        }
    }
})
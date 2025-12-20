import {defineStore} from 'pinia'

export const useUserStore = defineStore('user', {
    state() {
        return {
            user: {
                name: "枫枫",
                age: 21
            }
        }
    },
    actions: {
        addAge() {
            this.user.age++
        },
        setName(name: string) {
            this.user.name = name
        }
    },

    getters: {
        getAge(): number {
            return this.user.age
        }
    }
})


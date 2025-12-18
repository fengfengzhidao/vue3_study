// 计数、加 1（increment ）、减 1（decrement ）、重置
import {ref} from "vue";

export function useCounter(initValue = 0) {

    const count = ref(initValue)

    function increment() {
        count.value++
    }

    function decrement() {
        count.value--
    }


    function reset(){
        count.value = initValue
    }

    return {
        count,
        increment,
        decrement,
        reset,
    }
}
import {defineStore} from "pinia";
import {computed, ref} from "vue";

export interface carItemType {
    title: string
    price: number
}

export const useShoppingCarStore = defineStore("shoppingCar", () => {
    const carItemList = ref<carItemType[]>([])

    const totalPrice = computed(() => {
        let price = 0
        carItemList.value.forEach((value) => {
            price += value.price
        })
        return price
    })

    function addItemByCar(item: carItemType) {
        carItemList.value.push(item)
    }

    return {carItemList, totalPrice, addItemByCar}

})
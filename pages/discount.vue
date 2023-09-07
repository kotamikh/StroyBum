<template>
  <h1>Скидки</h1>
  <button @click="addCard" style="width: max-content; margin-bottom: 30px">Add</button>
  <button @click="deleteCard(20, 60)" style="width: max-content; margin-bottom: 30px">Delete</button>
  <div class="discount">

    <product-card v-for="product in products"
                  :key="product.name"
                  :name="product.name"
                  :images="product.images"
                  :price="500"
                  :stock="product.stock"
                  :discount="product.discount"
    />

  </div>
</template>

<script setup lang="ts">
import { IProduct, StockType } from "~/src/types/Product";
import { onMounted } from "#imports";
// import siding1 from 'assets/products/сайдинг-лапландия.png'
// import siding2 from 'assets/products/сайдинг-лапландия2.png'
// import ceiling1 from 'assets/products/Грильято_Белый.jpeg'
// import ceiling2 from 'assets/products/Грильято_Золотой.webp'
// import ceiling3 from 'assets/products/Грильято_Металлик.webp'
// import ceiling4 from 'assets/products/Грильято_Чёрный.webp'

onMounted(() => getAll())

const addCard = async () => {
  const response = await useFetch("http://192.168.0.2:8000/api/v1/products", {
    method: 'POST',
    body: {
      name: 'подоконник',
      images: ['https://woodenshield.ru/upload/iblock/315/315a22bb8c485f132d8e116b813bd940.jpg', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fleroymerlin.ru%2Fproduct%2Fpodokonnik-iz-dereva-big-house-600x200x40mm-yasen-celnolamelnyy-90598833%2F&psig=AOvVaw2wiSx6Wp99PMqzijyhnxbX&ust=1694165010558000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCOjLgc-WmIEDFQAAAAAdAAAAABAI'],
      stock: 1,
      discount: 15,
      description: 'описание',
      characteristics: [
        ["цвет", "синий"],
        ["размер", "бощой"]
      ]
    }
  })
  await getAll()
}

const getAll = async () => {
  const response = await useFetch("http://192.168.0.2:8000/api/v1/products", {
    method: "GET",
    params: {
      offset: 0,
      limit: 30
    }
  })

  const target: Array<IProduct> = JSON.parse(JSON.stringify(response["data"]["value"]))
  products.value = target
  console.log(target, products.value)
}

const deleteCard = async (start: number, end: number) => {
  await useFetch("http://192.168.0.2:8000/api/v1/products", {
    method: 'DELETE',
    params: {
      id: [start, end]
    }
  })
  await getAll()
}


const products: Ref<Array<IProduct>> = ref([])
</script>

<style scoped lang="sass">
.discount
  gap: 2rem
  display: flex
  flex-wrap: wrap
</style>
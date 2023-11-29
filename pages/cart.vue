<template>
  <h1>
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256">
      <path fill="#808080"
            d="M96 216a16 16 0 1 1-16-16a16 16 0 0 1 16 16Zm88-16a16 16 0 1 0 16 16a16 16 0 0 0-16-16Zm47.65-125.65l-28.53 92.71A23.89 23.89 0 0 1 180.18 184H84.07A24.11 24.11 0 0 1 61 166.59L24.82 40H8a8 8 0 0 1 0-16h16.82a16.08 16.08 0 0 1 15.39 11.6L48.32 64H224a8 8 0 0 1 7.65 10.35ZM213.17 80H52.89l23.49 82.2a8 8 0 0 0 7.69 5.8h96.11a8 8 0 0 0 7.65-5.65Z"/>
    </svg>
    Корзина
  </h1>
  <div class="cart-products">
    <cart-product v-for="product in cartProducts"
                  :id="product.id"
                  :name="product.name"
                  :images="product.images"
                  :price="product.price"
                  :discount="product.discount"
    />
  </div>
  <div class="order-form">
    <div class="order-sum">
      <p>Сумма заказа:</p>
      <p>{{ commonSum }} руб.</p>
    </div>
    <div class="form-confirm">
      <form>
        <label for="name">Ваше имя</label>
        <input type="text" name="name" required/>
        <label for="telephone">Номер телефона</label>
        <input type="tel" name="telephone" required/>
        <label for="city">Город доставки</label>
        <input type="text" name="city" required/>
      </form>
      <div class="order-confirm">
        <button>Подтвердить заказ</button>
        <p class="order-info">После подтверждения заказа продавец перезвонит вам чтобы уточнить детали</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProductsStore } from "~/store/products";
import { IProduct } from "~/types/Product";
import { computed } from "@vue/reactivity";

const store = useProductsStore()

store.getCart()

const cartProducts = computed<IProduct[]>(() => {
  const result: IProduct[] = []

  for (const id of store.cart) {
    const product = store.productsMap.get(id)
    if (product) {
      result.push(product)
    }
  }
  return result
})

const commonSum = computed(() => {
  let result = 0
  for (let [p, id] of store.cartQuantity) {
    let product = cartProducts.value.find((product) => product.id === p)
    result += product?.price * id
  }
  return result
})
</script>

<style scoped lang="sass">
*
  font-size: calc((100vw - 320px) / (1280 - 320) * (16 - 14) + 14px)

.cart-products
  gap: 10px
  display: flex
  flex-direction: column

h1
  gap: 10px
  display: flex
  align-items: center

.order-form
  gap: 20px
  display: flex
  padding: 20px 5%
  margin-top: 40px
  border-radius: 15px
  flex-direction: column
  background-color: rgba(0, 48, 120, 0.04)

  @media screen and (max-width: 559px)
    margin-top: 20px

  .order-sum
    display: flex
    justify-content: space-between

    p
      font-size: calc((100vw - 320px) / (1280 - 320) * (22 - 18) + 18px)

  .form-confirm
    display: flex
    align-items: flex-end

    @media screen and (max-width: 599px)
      gap: 20px
      align-items: center
      flex-direction: column

    form
      gap: 10px
      width: 40%
      display: flex
      flex-direction: column

      @media screen and (max-width: 599px)
        width: 70%

      input
        border: none
        height: 35px

    .order-confirm
      gap: 5px
      width: 50%
      display: flex
      align-items: end
      margin-left: auto
      flex-direction: column

      @media screen and (max-width: 599px)
        width: 100%

      button
        border: none
        cursor: pointer
        width: fit-content
        padding: 10px 25px
        border-radius: 8px
        background-color: var(--yellow)
        transition: all 0.2s ease-in-out

        &:hover
          -webkit-box-shadow: 0 0 20px 0 rgba(128, 128, 128, 0.5)
          -moz-box-shadow: 0 0 20px 0 rgba(128, 128, 128, 0.5)
          box-shadow: 0 0 20px 0 rgba(128, 128, 128, 0.5)

      .order-info
        text-align: end
        font-size: 0.85rem
</style>
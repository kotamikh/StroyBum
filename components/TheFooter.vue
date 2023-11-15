<template>
  <div class="footer">
    <div class="footer-item">
      <p class="address"><span>Адрес: </span> г. Киров<br/>
        2-й Кирпичный пер. 2/1</p>
    </div>
    <div class="footer-item">
      <p class="regime"><span>Пн-Пт:</span> 8:30 - 17:30<br/>
        <span>Сб:</span> 9:00 - 13:00</p>
    </div>
    <div class="footer-item">
      <p class="telephone"><span>Телефон: </span>+7 (8332)-75-69-83</p>
      <a href="https://vk.com/stroibum_kirov" class="vk-link" target="_blank" rel="noopener">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0,0,256,256">
          <g fill="#e3dc73" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
             stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
             font-family="none" font-size="none" style="mix-blend-mode: normal">
            <g transform="scale(10.66667,10.66667)">
              <path
                  d="M5,3c-1.105,0 -2,0.895 -2,2v14c0,1.105 0.895,2 2,2h14c1.105,0 2,-0.895 2,-2v-14c0,-1.105 -0.895,-2 -2,-2zM5,5h14v14h-14zM11.79102,8.85742c-0.59,-0.005 -1.09005,0.00263 -1.37305,0.14063c-0.188,0.092 -0.33314,0.29855 -0.24414,0.31055c0.109,0.014 0.35528,0.06609 0.48828,0.24609c0.169,0.231 0.16406,0.75 0.16406,0.75c0,0 0.09648,1.42747 -0.22852,1.60547c-0.223,0.122 -0.52855,-0.12572 -1.18555,-1.26172c-0.337,-0.583 -0.58984,-1.22656 -0.58984,-1.22656c0,0 -0.04972,-0.12155 -0.13672,-0.18555c-0.107,-0.078 -0.25586,-0.10352 -0.25586,-0.10352l-1.57031,0.00781c0,0 -0.23722,0.00052 -0.32422,0.10352c-0.077,0.092 -0.00586,0.27344 -0.00586,0.27344c0,0 1.231,2.86927 2.625,4.32227c1.279,1.332 2.72852,1.21094 2.72852,1.21094h0.6582c0,0 0.19978,0.01134 0.30078,-0.09766c0.093,-0.101 0.08984,-0.25781 0.08984,-0.25781c0,0 -0.01252,-0.88367 0.39648,-1.01367c0.404,-0.128 0.9217,0.85347 1.4707,1.23047c0.414,0.286 0.73047,0.22461 0.73047,0.22461l1.46875,-0.01953c0,0 0.76725,-0.04825 0.40625,-0.65625c-0.03,-0.05 -0.2118,-0.44763 -1.0918,-1.26563c-0.922,-0.856 -0.79845,-0.71822 0.31055,-2.19922c0.676,-0.901 0.94633,-1.4515 0.86133,-1.6875c-0.081,-0.226 -0.57812,-0.16602 -0.57812,-0.16602l-1.65234,0.00977c0,0 -0.12384,-0.01789 -0.21484,0.03711c-0.089,0.054 -0.14648,0.17773 -0.14648,0.17773c0,0 -0.26133,0.69897 -0.61133,1.29297c-0.735,1.253 -1.02939,1.31823 -1.15039,1.24024c-0.28,-0.18 -0.20898,-0.72624 -0.20898,-1.11524c0,-1.214 0.18262,-1.72056 -0.35937,-1.85156c-0.18,-0.044 -0.31148,-0.07117 -0.77148,-0.07617z"></path>
            </g>
          </g>
        </svg>
        Группа ВКонтакте</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFooter"
}
</script>

<style scoped lang="sass">
.footer
  bottom: 0
  display: flex
  position: absolute
  align-items: center

  height: 75px
  width: inherit
  color: var(--grey)
  background-color: white
  font-size: calc((100vw - 320px) / (1440 - 320) * (16 - 14) + 14px)

  @media screen and (max-width: 849px)
    row-gap: 15px
    column-gap: 35px
    padding: 10px 15px
    width: 100%
    left: 0
    flex-wrap: wrap
    height: fit-content
    margin-bottom: 45px
    justify-content: space-between
    background-color: var(--middle-grey)

    p,
    a,
    span
      color: white

  @media screen and (max-width: 579px)
    //padding: 10px 5px
    align-items: flex-start

  .footer-item
    margin-right: 20px

    @media screen and (max-width: 849px)
      margin: 0

    .vk-link
      gap: 5px
      display: flex
      align-items: center

      &:hover,
      &:focus
        color: var(--yellow)

    span
      font-weight: bolder

    &:last-of-type
      margin-right: 0
      margin-left: auto

      @media screen and (max-width: 849px)
        margin: 0

  .column
    display: contents
  //
  //@media screen and (max-width: 579px)
  //  gap: 10px
  //  display: flex
  //  flex-direction: column
</style>
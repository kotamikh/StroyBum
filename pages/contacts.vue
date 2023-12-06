<template>
  <h1>Контакты</h1>
  <div class="contacts">
    <div class="contacts-text">
      <div class="address">
        <p><span>Адрес магазина:</span> г. Киров, 2-й Кирпичный пер. 2/1<br/>(территория базы “Слон”).</p>
      </div>
      <div class="regime">
        <span>Режим работы: </span>
        <p>Пн-Пт 8:30-17:30,<br/>Сб 9:00-13:00.</p>
      </div>
      <div class="telephone">
        <span>Телефоны:</span>
        <p>+7 (8332) 75-69-83<br/>+7 (8332) 79-69-00</p>
      </div>
      <button class="message-btn">Написать нам
        <svg fill="#555555" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
          <path d="M128 24a104 104 0 0 0-91.82 152.88l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35A104 104 0 1 0 128 24Zm0 192a87.87 87.87 0 0 1-44.06-11.81a8 8 0 0 0-6.54-.67L40 216l12.47-37.4a8 8 0 0 0-.66-6.54A88 88 0 1 1 128 216Z"/>
        </svg>
      </button>
      <div class="vk">
        <a href="https://vk.com/stroibum_kirov" target="_blank" rel="noopener">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 20 20">
            <path fill="#0077ff"
                  d="M19 17V3c0-1.1-.903-2-2.005-2H3.005C1.855 1 1 1.853 1 3v14c0 1.148.855 2 2.005 2h13.99A2.008 2.008 0 0 0 19 17zm-3.816-5.393s1.132 1.117 1.411 1.635c.008.011.011.021.014.025c.113.19.142.34.085.45c-.094.183-.414.275-.523.283h-1.999c-.14 0-.43-.036-.782-.279c-.27-.188-.537-.499-.797-.802c-.388-.45-.724-.84-1.062-.84a.383.383 0 0 0-.126.021c-.257.082-.583.447-.583 1.422c0 .305-.24.479-.41.479h-.916c-.312 0-1.937-.109-3.376-1.628c-1.766-1.86-3.352-5.591-3.366-5.624c-.1-.241.107-.372.332-.372h2.02c.271 0 .358.164.42.311c.07.167.334.841.766 1.599c.703 1.233 1.136 1.735 1.481 1.735a.378.378 0 0 0 .184-.049c.451-.249.367-1.857.347-2.189c0-.063-.001-.719-.231-1.034c-.166-.228-.447-.315-.617-.348a.738.738 0 0 1 .266-.226C8.031 6.022 8.588 6 9.142 6h.308c.601.008.757.047.974.102c.439.105.448.39.409 1.36c-.011.276-.023.589-.023.956c0 .079-.003.166-.003.256c-.014.496-.03 1.057.32 1.287a.289.289 0 0 0 .151.044c.122 0 .487 0 1.476-1.697c.435-.749.77-1.633.793-1.699a.528.528 0 0 1 .148-.183a.347.347 0 0 1 .166-.039h2.375c.26 0 .436.039.469.138c.057.159-.011.644-1.096 2.11l-.483.64c-.984 1.288-.984 1.354.058 2.332z"/>
          </svg>
          Мы ВКонтакте</a>
      </div>
    </div>
    <div class="contacts-map">
      <component class="yandex-map" :is="'script'" type="application/javascript" charset="utf-8" async
                 src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A0f5ae8f64d658ba78051cb8f2f83e9be1c18cc4a080af3742893da1b3fecd609&amp;height=350&amp;lang=ru_RU&amp;scroll=true"></component>
    </div>
  </div>
</template>

<style scoped lang="sass">
*
  color: var(--grey)
  font-size: calc((100vw - 320px) / (1280 - 320) * (18 - 16) + 16px)

.contacts
  display: flex
  margin-bottom: 50px
  justify-content: space-evenly

  @media screen and (max-width: 459px)
    gap: 20px
    flex-direction: column

  .contacts-text
    gap: 30px
    height: 350px
    display: flex
    flex-direction: column
    justify-content: space-between

    @media screen and (max-width: 799px)
      gap: 10px
      margin-right: 10px
    @media screen and (max-width: 459px)
      margin-left: 20px

    span
      font-family: Fira, sans-serif

    @media screen and (max-width: 799px)
      .address p,
      .regime
        display: flex
        flex-direction: column

    .regime
      gap: 10px
      display: flex
      @media screen and (max-width: 799px)
        gap: 0

    .message-btn
      gap: 8px
      display: flex
      cursor: pointer
      align-items: center

      border: none
      padding: 4px 10px
      border-radius: 5px
      width: max-content
      transition: all 0.2s ease-in-out
      background-color: var(--yellow)

      &:hover
        background-color: rgb(255, 225, 8)

    .vk
      a
        gap: 5px
        display: flex
        width: fit-content
        align-items: center

        &:hover,
        &:focus
          color: #0077ff

  .contacts-map
    width: 45%

    @media screen and (max-width: 799px)
      width: 55%
    @media screen and (max-width: 569px)
      width: 45%
    @media screen and (max-width: 459px)
      width: 100%
      align-self: center
</style>
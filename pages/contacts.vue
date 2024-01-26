<template>
  <div class="wrapper">
    <h1 class="page-name">Контакты</h1>
    <div class="contacts">
      <div class="contacts-item">
        <img src="@/assets/contacts-images/адрес.png" alt="address"/>
        <span>Адрес магазина</span>
        <p>г. Киров, 2-й Кирпичный пер. 2/1<br/>(территория базы “Слон”)</p>
      </div>
      <div class="contacts-item">
        <img src="@/assets/contacts-images/часы.png" alt="manager"/>
        <span>Режим работы</span>
        <p>Пн-Пт 8:30-17:30<br/>Сб 9:00-13:00</p>
      </div>
      <div class="contacts-item">
        <img src="@/assets/contacts-images/телефон.png" alt="telephone">
        <span>Телефоны</span>
        <p>+7 (8332) 79-69-00<br/>+7 (8332) 75-69-83</p>
      </div>
    </div>
    <div class="button-vk">
      <button class="message-btn">Написать нам
        <svg fill="#555555" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
          <path
              d="M128 24a104 104 0 0 0-91.82 152.88l-11.35 34.05a16 16 0 0 0 20.24 20.24l34.05-11.35A104 104 0 1 0 128 24Zm0 192a87.87 87.87 0 0 1-44.06-11.81a8 8 0 0 0-6.54-.67L40 216l12.47-37.4a8 8 0 0 0-.66-6.54A88 88 0 1 1 128 216Z"/>
        </svg>
      </button>
      <a href="https://vk.com/stroibum_kirov" target="_blank" rel="noopener">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 48 48">
          <path fill="#555555"
                d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 36.5 42 C 39.519774 42 42 39.519774 42 36.5 L 42 11.5 C 42 8.4802259 39.519774 6 36.5 6 L 11.5 6 z M 11.5 9 L 36.5 9 C 37.898226 9 39 10.101774 39 11.5 L 39 36.5 C 39 37.898226 37.898226 39 36.5 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 z M 13.816406 17.125 C 13.117406 17.125 13 17.467984 13 17.833984 C 13 18.494984 13.550734 22.067781 16.552734 26.175781 C 18.729734 29.154781 21.597719 30.873047 24.136719 30.873047 C 25.674719 30.873047 25.832031 30.483094 25.832031 29.871094 L 25.832031 27.146484 C 25.833031 26.412484 26.001234 26.291016 26.490234 26.291016 C 26.839234 26.291016 27.550781 26.519047 28.925781 28.123047 C 30.511781 29.973047 30.799984 30.873047 31.708984 30.873047 L 34.109375 30.873047 C 34.666375 30.873047 34.985047 30.6405 34.998047 30.1875 C 35.001047 30.0725 34.984266 29.942828 34.947266 29.798828 C 34.769266 29.270828 33.9545 27.978047 32.9375 26.748047 C 32.3735 26.067047 31.816547 25.393344 31.560547 25.027344 C 31.389547 24.788344 31.324031 24.618031 31.332031 24.457031 C 31.340031 24.287031 31.428547 24.127344 31.560547 23.902344 C 31.537547 23.902344 34.638406 19.546125 34.941406 18.078125 C 34.983406 17.940125 35.003047 17.811266 34.998047 17.697266 C 34.984047 17.365266 34.757703 17.125 34.220703 17.125 L 31.820312 17.125 C 31.214312 17.125 30.935484 17.492375 30.771484 17.859375 C 30.771484 17.859375 29.274781 20.93875 27.550781 22.96875 C 26.991781 23.55675 26.707297 23.541016 26.404297 23.541016 C 26.242297 23.541016 25.832031 23.344641 25.832031 22.806641 L 25.832031 18.054688 C 25.832031 17.418688 25.674109 17.125 25.162109 17.125 L 20.900391 17.125 C 20.527391 17.125 20.333984 17.417891 20.333984 17.712891 C 20.333984 18.323891 21.157953 18.470594 21.251953 20.183594 L 21.251953 23.505859 C 21.251953 24.312859 21.111594 24.457031 20.808594 24.457031 C 19.992594 24.457031 18.385547 21.707516 17.310547 18.103516 C 17.077547 17.394516 16.844281 17.125 16.238281 17.125 L 13.816406 17.125 z"></path>
        </svg>
        Мы ВКонтакте</a>
    </div>
    <p class="map-text">Магазин на карте</p>
    <div class="map">
      <component class="yandex-map" :is="'script'" type="application/javascript" charset="utf-8" async
                 src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A0f5ae8f64d658ba78051cb8f2f83e9be1c18cc4a080af3742893da1b3fecd609&amp;height=350&amp;lang=ru_RU&amp;scroll=true"></component>
    </div>
  </div>
</template>

<style scoped lang="sass">
*
  font-weight: lighter

.wrapper
  width: 100%
  margin: 0 auto 20px

  .contacts
    gap: 30px
    display: flex
    margin: 0 auto 30px
    justify-content: space-between
    font-size: calc((100vw - 320px) / (1280 - 320) * (15 - 13) + 13px)

    @media screen and (max-width: 809px)
      gap: 20px
      width: 100%

    @media screen and (max-width: 699px)
      flex-wrap: wrap
      justify-content: center

    .contacts-item
      width: 30%
      display: flex
      text-align: center
      align-items: center
      flex-direction: column
      p
        color: rgba(85, 85, 85, 0.90)

      img
        width: calc((100vw - 320px) / (1440 - 320) * (95 - 65) + 65px)

      span
        font-size: calc((100vw - 320px) / (1280 - 320) * (24 - 18) + 18px)

      @media screen and (max-width: 809px)
        width: 35%

      @media screen and (max-width: 699px)
        width: 45%

      @media screen and (max-width: 469px)
        width: 65%

  .button-vk
    gap: 10px
    margin: auto
    display: flex
    padding: 20px 0
    align-items: center
    flex-direction: column
    border-top: 1px solid rgba(85, 85, 85, 0.5)
    border-bottom: 1px solid rgba(85, 85, 85, 0.5)
    font-size: calc((100vw - 320px) / (1280 - 320) * (18 - 16) + 16px)

    .message-btn
      gap: 8px
      display: flex
      cursor: pointer
      align-items: center
      justify-content: center

      border: none
      width: 200px
      height: 40px
      padding: 4px 10px
      border-radius: 15px
      background-color: var(--yellow)
      transition: all 0.2s ease-in-out

      &:hover
        background-color: var(--dark-yellow)

    a
      gap: 5px
      display: flex
      width: fit-content
      align-items: center

      &:hover,
      &:focus
        text-decoration: underline
        text-decoration-thickness: 2px
        text-underline-position: under
        text-decoration-color: var(--yellow)

  .map-text
    margin: 30px auto
    font-size: calc((100vw - 320px) / (1280 - 320) * (24 - 18) + 18px)
</style>
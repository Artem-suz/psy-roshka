<template>
  <the-header/>
  <main class="main">
    <div class="container">
      
      <section 
        class="presentation wow fadeInDown"
      >
        <span id="about-me"
              class="observer"/>
        <div class="presentation__left">
          <h1 class="title-xl">
            Психолог с индивидуальным подходом
          </h1>
          <p class="paragraph-l">
            Лучшая терапия, сочетающая заботу и знания
          </p>
          <div class="presentation__btn-wrapper presentation__btn-wrapper-desktop">
            <v-button 
              theme="purple"
              href="#contacts">
              Записаться
            </v-button>
          </div>

          
        </div>
        <div class="presentation__right">
          <picture>
            <source
              srcset="/src/app/assets/images/roshka-avatar.webp" 
              type="image/webp"
            >
            <img
              src="/src/app/assets/images/roshka-avatar.png"
              type="image/png"
              class="presentation__img"
              draggable="false"
              loading="lazy"
              decoding="async"
              alt="Анастасия Рошка"
            >
          </picture>
          <article class="presentation__introduce">
            <p class="paragraph"
               v-html="PRESENTATION_TEXT"/>
          </article>
        </div>
        <div class="presentation__btn-wrapper presentation__btn-wrapper-mobile">
          <v-button 
            theme="purple"
            href="#contacts">
            Записаться
          </v-button>
        </div>
      </section>

      <section class="presentation-mobile wow fadeInDown">
        <div class="presentation-mobile__left">
          <article>
            <p class="paragraph"
               v-html="PRESENTATION_TEXT"/>
          </article>
        </div>
        <div class="presentation-mobile__right">
          <logo-with-label size="48"/>
        </div>
      </section>

      <section class="quote wow fadeInDown">
        <blockquote :cite="URL_QUOTE">
          <p class="title-xl">
            “Мы не можем решать наши проблемы тем же мышлением, которым создавали их”
          </p>
          <footer>
            <p class="title">
              (Альберт Эйнштейн)
            </p>
          </footer>
        </blockquote>
      </section>

      <section class="help wow fadeInDown">
        <h2 class="title-l">Я здесь, чтобы <b class="highlight">помочь</b> Вам </h2>
        <div class="help__content">
          <div class="help__left">
            <p class="paragraph">
              Работаю в интегративном подходе. Соединяю различные методы терапии, что 
              позволяет подобрать необходимые ключи к каждому уникальному человеку и решить его проблему.
            </p>
          </div>
          <div class="help__right">
            <p class="paragraph">
              Прошла опыт выздоровления от ПРЛ, в ходе которого возникали трудности и преграды, 
              преодолению которых способствовала поддержка близких, терапевта и моего внутреннего Взрослого.
            </p>
          </div>
        </div>
      </section>

      <section class="why-me wow fadeInDown">
        <h2 class="title-l"><b class="highlight">Почему я?</b></h2>
        <div class="why-me__content">
          <div class="why-me__left">
            <p class="paragraph">
              Выбирая меня в качестве своего психолога, вы получите не только поддержку и понимание, но и 
              индивидуальный подход, направленный на достижение конкретных результатов и улучшение качества жизни.
            </p>
            <p class="paragraph">
              Я помогу вам раскрыть свой потенциал и достичь поставленных целей.
            </p>
          </div>
          <div class="why-me__right">
            <iframe width="620"
                    height="370"
                    src="https://www.youtube.com/embed/fJFwcziI9Kc?si=ycHaDSWuh4PTwbWM"
                    title="Psy.Roshka"
                    frameborder="0"
                    class="why-me__video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                    gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen/>
          </div>
        </div>
      </section>

      <section class="requests wow fadeInDown">
        <div class="requests__left">
          <logo-with-label size="150"/>
          <v-button class="requests__btn"
                    theme="purple"
                    href="#contacts">Записаться</v-button>
        </div>
        <div class="requests__right">
          <h2 class="title-l">Запросы, с которомы я работаю</h2>
          <ul class="requests__list">
            <li>
              <p class="paragraph">
                Неудовлетворенность отношениями, конфликты и взаимные обиды, 
                столкновение с изменой партнёра, созависимость.
              </p>
            </li>
            <li>
              <p class="paragraph">
                Улучшение способов коммуникации — о том, как оказаться услышанным и услышать самому. 
                О том, как быть понятым и понять другого.
              </p>
            </li>
            <li>
              <p class="paragraph">
                Кризис и проблема самоопределения, поиск опорных смыслов и ценностей, 
                адаптация к сильным переменам в жизни, определение приоритетов.
              </p>
            </li>
            <li>
              <p class="paragraph">
                Профессиональное выгорание и карьерные вопросы: усталость от работы, отсутствие мотивации, 
                неудовлетворенность карьерой, поиск нового профессионального пути.
              </p>
            </li>
            <li>
              <p class="paragraph">
                Проблемы самооценки и уверенности в себе: низкая самооценка, 
                неуверенность в своих силах и возможностях, негативное самовосприятие.
              </p>
            </li>
            <li>
              <p class="paragraph">
                Работа с эмоциональными состояниями: отчаяние, растерянность, злость, агрессия, панические атаки, 
                страхи, обида, тревога, чувство вины, стресс и тд.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section class="education wow fadeInDown">
        <div class="education__left">
          <h2 class="title-l">Образование</h2>
          <div class="education__desc-wrapper">
            <p class="paragraph">
              Много учусь. Регулярно повышаю квалификацию, улучшаю 
              свои знания и технику работы, прохожу супервизии, интервизии и 
              имею сильную поддержку коллег в профессиональном поле. 
            </p>

          </div>
        </div>
        <div class="education__right">
          <picture>
            <img
              src="/src/app/assets/images/dip-bak.webp"
              type="image/webp"
              class="education__img"
              draggable="false"
              loading="lazy"
              decoding="async"
              alt="Сертификат онлайн институт Smart"
              @click="displayCertificate"
            >
          </picture>
        </div>
      </section>

      <section 
        class="reviews wow fadeInDown">
        <span id="reviews"
              class="observer"/>
        <h2 class="title-l" >Отзывы</h2>
        <review-slider :dataReviews="DATA_REVIEWS"/>
      </section>


      
      <section  
        class="contacts wow fadeInDown">
        <span id="contacts"
              class="observer"/>
        <div class="contacts__left">
          <h2 class="title-l">Остались вопросы? Я помогу!</h2>
          <h4 class="title-l">Мои Контакты</h4>
          <ul class="contacts__list">
            <li>
              <p class="paragraph">
                Мой телефон: 
                <a href="tel:8 926 113-80-85"
                   title="Номер телефона"
                   class="contacts__tel"> 
                  +7 926 113-80-85
                </a>
              </p>
            </li>
            <li>
              <p class="paragraph">
                Почта:
                <a href="mailto: psy.roshka@mail.ru"
                   class="contacts__mail"
                   title="Email"> 
                  psy.roshka@mail.ru
                </a>
              </p>
            </li>
            <li>
              <a href="https://t.me/psy_roshka"
                 title="Telegram"
                 target="_blank"
                 class="contacts__tg">
                <v-icon name="tg"
                        size="40"/>
              </a>
              <a href="https://wa.me/79261138085"
                 title="WhatsApp"
                 target="_blank"
                 class="contacts__wa">
                <v-icon name="wa"
                        size="40"/>
              </a>
            </li>
          </ul>
        </div>
        <div class="contacts__right">
          <get-contact-form 
            :isFetching="isFetching"
            :isDisplaySuccessMessage=isDisplaySuccessMessage
            :isDisplayRejectMessage="isDisplayRejectMessage"
            @submit="submitFormHandler"/>
        </div>
      </section>
    </div>
    <transition name="fade" >
      <div v-show="isDisplayOverlay"
           class="overlay"
           @click.stop="displayCertificate">
        <document-slider/>
      </div>
    </transition>
    
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import WOW from 'wow.js'
import 'wow.js/css/libs/animate.css'
import { TheHeader, ReviewSlider, DocumentSlider } from '@/widgets'
import { GetContactForm } from '@/entities'
import { VButton, LogoWithLabel, VIcon } from '@/shared/ui'

const isDisplayOverlay = ref(false)
const isFetching = ref(false)
const isDisplaySuccessMessage = ref(false)
const isDisplayRejectMessage = ref(false)
function displayCertificate() {
 isDisplayOverlay.value = !isDisplayOverlay.value
}
function displayAjaxSuccess() {
 isDisplaySuccessMessage.value = true
 isDisplayRejectMessage.value = false
}
function displayAjaxReject() {
 isDisplaySuccessMessage.value = false
 isDisplayRejectMessage.value = true
}

// ajax part
async function submitFormHandler(message) {
 const params = {
  chat_id: CHAT_ID,
  parse_mode: 'html',
  text: message
 }
 try {
  isFetching.value = true
  const resp = await sendUserData(params)
  isFetching.value = false
  if(resp.ok) {
   displayAjaxSuccess()
   return
  }
  throw new Error()
 } catch(error) {
  displayAjaxReject()
 }

}

function sendUserData(params) {
 return fetch(
  URI_API,
  {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json;charset=utf-8'
   },
   body: JSON.stringify(params)
  })
  .then(r => r.json())
  .then(data => data)
}
onMounted(() => {
 new WOW({
  live: false
 }).init()
})


</script>









<script>

const PRESENTATION_TEXT = ref('Приветствую! Меня зовут Анастасия, я психолог, психотерапевт и просто девушка,' +
' которая движется по своему пути самопознания и развития.<br/> Я очень люблю свою профессию,' +
 ' в которой развиваюсь уже несколько лет.')
const DATA_REVIEWS = [
 {
  name: 'Галина Потапова',
  text: 'Очень благодарна Анастасии за ее профессионализм и внимание к моим проблемам. Благодаря ей я нашла в ' + 
  'себе силы и решения для сложных жизненных ситуаций.'
 },
 {
  name: 'Петр Алексеенко',
  text: 'Анастасия - очень теплая и понимающая девушка. Она помогла мне разобраться в своих эмоциях и' +
 'найти себя, способы управлять своим стрессом. Рекомендую!'
 },
 {
  name: 'Анна  Григорян',
  text: 'Сотрудничество с Анастасией было очень продуктивным. Она помогла мне лучше понять' +
  'себя и свои отношения с окружающими. Спасибо за поддержку!'
 },
 {
  name: 'Иван Клийманов',
  text: 'Сессии стали для меня настоящим открытием. Анастасия  помогла мне пересмотреть свою жизнь и' +
  'найти новые пути к счастью.'
 },
 {
  name: 'Максим Протапопов',
  text: 'Благодаря работе с Анастасией я стал более уверенным в себе и нашел внутренний баланс.' +
  'Очень ценю ее поддержку и профессионализм!'
 },
 {
  name: 'Алла Маникова',
  text: 'Невероятно внимательный и заботливый психолог. С ней я чувствую себя понятым и поддержанным,' +
  'что помогает мне преодолевать трудности.'
 },
 {
  name: 'Мария Четверикова',
  text: 'Профессионал своего дела! Спасибо за помощь в решении сложных жизненных проблем и за' +
  'поддержку на пути к личностному росту.'
 },
 {
  name: 'Денис Кириенко',
  text: 'Очень доволен результатами работы с этим психологом. Она помогла мне осознать свои цели и построить' +
  'план действий для их достижения.'
 },
 {
  name: 'Мария Калинина',
  text: 'Никогда бы не подумала что ты начинающий специалист!' +
'Я была у разных, и опытных, и не очень, но именно с тобой получилось проработать все внутренние конфликты и уже' +
'наконец-то выйти на новый уровень!!! Спасибо'
 },
 {
  name: 'Григорий Ельшин ',
  text: 'Уже после первой консультации я почувствовал себя намного лучше!' + 
 'Спустя 3 месяца работы я стал наблюдать реальные изменения в жизни) спасибо! Думаю, дальше - больше'
 },
 {
  name: 'Алена Ермолова',
  text: 'Мне нравится этот комфорт который ты создаёшь на наших консультациях)' +
'Мне тяжело открыться людям, и до этого не было такого доверия ни с одним психологом!'
 }
]
const URL_QUOTE = 'https://www.nur.kz/leisure/books/1780446-albert-ejnstejn-citaty-o-zizni/#:~:' + 
'text=%D0%9C%D1%8B%20%D0%BD%D0%B5%20%D0%BC%D0%BE%D0%B6%D0%B5%D0%BC%20%D1%80%D0%B5%D1%88%D0%B8%D1%'+
'82%D1%8C%20%D0%BD%D0%B0%D1%88%D0%B8,%D0%BB%D1%8E%D0%B1%D0%BE%D0%BF%D1%8B%D1%82%D1%81%D1%82%D0%B2%D'+
'0%B0%20%D0%B5%D1%81%D1%82%D1%8C%20%D1%81%D0%B2%D0%BE%D1%8F%20%D0%BF%D1%80%D0%B8%D1%87%D0%B8%D0%BD%D0'+
'%B0%20%D1%81%D1%83%D1%89%D0%B5%D1%81%D1%82%D0%B2%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.'
// Токен
const TOKEN = '6778770066:AAE4st_NgV6MmPSXTieP2_QmmBpt4U3_LQs';
// ID чата
const CHAT_ID = '-4106410586';
// URI
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
</script>
<style lang="scss">
@import './style.scss';
</style>

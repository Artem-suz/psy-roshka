<template>

  <div class="document-slider__wrapper" >
    <swiper class="document-slider"
            :modules="swiperModules"
            :slides-per-view="1"
            :loop="true"
            :pagination="{ clickable: true }"
            :navigation="{
              nextEl,
              prevEl
            }"
            @click.stop
    >
      <swiper-slide v-for="(document, idx) in DATA_DOCUMENT_IMAGES"
                    :key="idx">
        <picture class="sertificate__wrapper">
          <source
            :srcset="document.webp" 
            type="image/webp"
          >
          <img :src="document.png"
               type="image/png"
               class="sertificate"
               draggable="false"
               loading="lazy"
               decoding="async"
               :alt="document.alt"
               @click.stop
          >
        </picture>
      </swiper-slide>

      <button v-if="isDisplayNavBtns" 
              ref="prevEl"
              class="document-slider__btn-prev"
              type="button"
              @click.stop>
        <v-icon name="arrow-up2"
                size="82"/>
      </button>
      <button v-if="isDisplayNavBtns"
              ref="nextEl" 
              class="document-slider__btn-next"
              type="button"
              @click.stop>
        <v-icon name="arrow-up2"
                size="82"/>
      </button>
    </swiper>



  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import {VIcon} from '@/shared/ui'
import 'swiper/css';
import 'swiper/css/pagination';
'/src/app/assets/images/certificate.png'
const DATA_DOCUMENT_IMAGES = [
 {
  webp: '/psy-roshka/assets/certificate.webp',
  png: '/psy-roshka/assets/certificate.png',
  alt: 'Сертификат Онлайн-институт "Smart" '
 }

]

const swiperModules = [Navigation, Pagination, A11y]
const nextEl = ref(null)
const prevEl = ref(null)
const isDisplayNavBtns = computed(() => DATA_DOCUMENT_IMAGES.length > 1)
</script>
<style lang="scss">
@import './style.scss';
</style>
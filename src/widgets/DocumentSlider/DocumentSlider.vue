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
          <img :src="document.webp"
               type="image/webp"
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
// '/src/app/assets/images/certificate.png'
// const DATA_DOCUMENT_IMAGES = [


const DATA_DOCUMENT_IMAGES = [
 {
  webp: '/src/app/assets/images/dip-bak.webp',
  alt: 'Диплом бакалавра с отличием. Номер: 107704 0514886'
 },
 {
  webp: '/src/app/assets/images/certificate.webp',
  alt: 'Сертификат Онлайн-институт "Smart"'
 },
 {
  webp: '/src/app/assets/images/sert-mgpu.webp',
  alt: 'Сертификат "Московский государственный психилого-педагогический университет"'
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
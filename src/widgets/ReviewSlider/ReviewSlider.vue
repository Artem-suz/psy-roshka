<template>
  <div class="reviews-slider__wrapper">
    <swiper class="reviews-slider"
            :modules="swiperModules"
            :slides-per-view="displayedSlides"
            :space-between="slidesOffset"
            :grab-cursor="true"
            :loop="true"
            :pagination="{ clickable: true }"
            :navigation="{
              nextEl,
              prevEl
            }">
      <swiper-slide v-for="(review, idx) in dataReviews"
                    :key="idx">
        <review-card :name=review.name
                     :text="review.text"/>
      </swiper-slide>

          
    </swiper>
    <div class="reviews-slider__navigation">
      <button ref="prevEl"
              class="reviews-slider__btn-prev"
              type="button">
        <v-icon name="arrow-up"
                size="18"/>
      </button>
      <button ref="nextEl"
              class="reviews-slider__btn-next"
              type="button">
        <v-icon name="arrow-up"
                size="18"/>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import {ReviewCard} from '@/entities'
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { useScreen } from '@/shared/composables'
import {VIcon} from '@/shared/ui'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

defineProps({
 dataReviews: {
  type: Array,
  default() {
   return []
  }
 }

})
const swiperModules = [Navigation, Pagination, A11y]
const nextEl = ref(null)
const prevEl = ref(null)
const breakpointSign = useScreen()
const displayedSlides = computed(() => {
 if (breakpointSign.value === 'lg' || breakpointSign.value === 'xl') {
  return 3
 }
 return 2
})
const slidesOffset = computed(() => {
 if (breakpointSign.value === 'lg' || breakpointSign.value === 'xl') {
  return 25
 }
 return 16
})
</script>

<style lang="scss">
@import './style.scss';
</style>
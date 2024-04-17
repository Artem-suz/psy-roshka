<template>
  <article class="review-card"
           :class="{'open': isOpenParagraph}">
    <header class="review-card__header">
      <h3 class="title">{{ name }}</h3>
      <ul class="review-card__stars">
        <li>
          <v-icon name="gold-star"
                  :size="starSize"/>
        </li>
        <li>
          <v-icon name="gold-star"
                  :size="starSize"/>
        </li>
        <li>
          <v-icon name="gold-star"
                  :size="starSize"/>
        </li>
        <li>
          <v-icon name="gold-star"
                  :size="starSize"/>
        </li>
        <li>
          <v-icon name="gold-star"
                  :size="starSize"/>
        </li>
      </ul>
    </header>
    <main class="review-card__main">
      <div>
        <p class="review-card__paragraph paragraph">
          {{ text }}
        </p>
        <button v-show="!isOpenParagraph"
                class="review-card__btn"  
                type="button"
                @click="openParagraph">
          Читать полностью
        </button>
        
      </div>
    </main>
            
          
  </article>
</template>
<script setup>
import { ref, computed } from 'vue'
import { VIcon} from '@/shared/ui'
import { useScreen } from '@/shared/composables'
const isOpenParagraph = ref(false)
defineProps({
 name: {
  type: String,
  default: ''
 },
 text: {
  type: String,
  default: ''
 }
})
const breakpointSign = useScreen()
const starSize = computed(() => {
 if (breakpointSign.value === 'xs' || breakpointSign.value === 'sm') {
  return 10
 }
 return 14
})
function openParagraph() {
 isOpenParagraph.value = true
}
</script>
<style lang="scss">
@import './style.scss';
</style>
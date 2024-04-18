<template>
  <div class="v-button__wrapper">
    <a v-if="href"
       :href="href"
       title="Записаться"
       :class="['v-button', themeClass, fetchingClass]">
      <slot/>
    </a>
    <button v-else
            :class="['v-button', themeClass, fetchingClass]"
            :type="type">
      <span v-if="isPrependSlot"
            class="v-button__prepend">
        <slot name="prepend"/>
      </span>


      <slot/>


      <transition name="fade"
                  mode="out-in">
        <span v-if="isAppendSlot && !isFetching"
              class="v-button__append">
          <slot name="append" />
        </span>

        <v-icon
          v-else-if="isFetching"
          size="24"
          class="v-button__preloader"
          name="preloader"
          title="preloader"
        />
      </transition>

    </button>

  </div>

</template>
<script>
const THEMES = ['purple']
</script>
<script setup>
import { useSlots, computed } from 'vue'
import { VIcon } from '@/shared/ui'

const props = defineProps({
 type: {
  type: String,
  default: 'button'
 },
 isFetching: {
  type: Boolean,
  default: false
 },
 href: {
  type: String,
  default: ''
 },
 theme: {
  type: String,
  required: true,
  validator: value => THEMES.includes(value)
 }
 
})
const slots = useSlots()
const themeClass = computed(() => `theme-${props.theme}`)
const isPrependSlot = computed(() => slots.prepend)
const isAppendSlot = computed(() => slots.append)
const fetchingClass = computed(() => (props.isFetching ? 'fetching' : ''))

</script>
<style lang="scss">
@import './styles';
</style>
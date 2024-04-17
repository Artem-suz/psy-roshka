<template>
  <div class="logo-with-label">
    <v-icon :size="size"
            name="flower"/>
    <svg class="logo-with-label__text"
         viewBox="0 0 100 100">
      <path id="circle"
            d="M 0,50 a 50,50 0 1,1 0,1 z" />
      <text>
        <textPath xlink:href="#circle">
          Мудрость начинается с самопознания
        </textPath>
      </text>
    </svg>
  </div>
</template>
<script setup>
import {VIcon} from '../';
defineProps({
 size: {
  type: [String, Number],
  default: '24'
 }
})
</script>
<style lang="scss">
.logo-with-label {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &__text {
    position: absolute;
    top: 6px;
    bottom: 6px;
    left: 6px;
    right: 6px;
    display: block;
    overflow: visible;
    font-size:8px;
    font-weight: 600;
    text-transform: uppercase;
    animation: rotate 14s infinite linear;
    fill: $purple-700;
    @include tablet {
      font-size: get-theme-for($typography, 'text', 'XS', 'size');
      line-height: get-theme-for($typography, 'text', 'XS', 'line-height');
      
    }
    path {
      fill: none;
    }
  }
}
</style>
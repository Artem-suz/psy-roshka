<template>
  <header class="header" 
          :class="[classDisplayMobileNavigation]">
    <div class="container">
      <div class="header__inner">
        <button class="header__burger-btn"
                @click="handlerDisplayMobileMenu">
          <span/>
          <span/>
          <span/>
        </button>
        <a class="header__logo"
           href="/"
           title="psy.roshka"
        >
          psy.roshka
          <v-icon class="header__logo-img"
                  :size="iconSize"
                  name="flower"/>
        </a>
        <nav class="header__navigation">
          <ul class="header__navigation-list">
            <li class="header__navigation-item">
              <a href="#about-me"
                 title="Обо мне"
                 @click="handlerDisplayMobileMenu">
                Обо мне
              </a>
            </li>
            <li class="header__navigation-item">
              <a href="#reviews"
                 title="Отзывы"
                 @click="handlerDisplayMobileMenu">
                Отзывы
              </a>
            </li>
            <li class="header__navigation-item">
              <a href="#contacts"
                 title="Контакты"
                 @click="handlerDisplayMobileMenu">
                Контакты
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <transition name="fade">
      <div v-if="isOpenMobileNavMenu"
           class="overlay"
           @click="handlerDisplayMobileMenu"/>
    </transition>
    
  </header>
</template>
<script setup>
import { computed, ref } from 'vue'
import { useScreen } from '@/shared/composables'
import { VIcon } from '@/shared/ui'

const FLOWER_ICON_SIZE = {
 desktop: '32',
 tablet: '20'
}

const breakpointSign = useScreen()
// бургер меню
const isOpenMobileNavMenu = ref(false)
const classDisplayMobileNavigation = computed(() => isOpenMobileNavMenu.value ? 'open' : '')

function handlerDisplayMobileMenu() {
 if (breakpointSign.value === 'xl') {
  return 
 }

 isOpenMobileNavMenu.value = !isOpenMobileNavMenu.value
}

// img label
const isTabletScreenWidth = computed(() => breakpointSign.value !== 'xl')
const iconSize = computed(() => isTabletScreenWidth.value ?
 FLOWER_ICON_SIZE.tablet : FLOWER_ICON_SIZE.desktop)
</script>
<style lang="scss">
@import './styles';
</style>
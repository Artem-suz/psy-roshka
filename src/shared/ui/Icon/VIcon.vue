<template>
  <svg
    :class="className"
    :style="styles"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
    focusable="false"
    aria-hidden="true"
  >
    <title v-if="title">
      {{ title }}
    </title>
    <use :xlink:href="symbolId"
         xmlns:xlink="http://www.w3.org/1999/xlink" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
 name: 'VIcon',
 props: {
  name: { String, required: true },
  size: { type: [String, Number], default: '1em' },
  title: { type: String, default: '' }
 },
 setup(props) {
  const styles = computed(() => {
   const size = Number(props.size)

   return {
    width: Number.isNaN(size) ? props.size : `${size}px`,
    height: Number.isNaN(size) ? props.size : `${size}px`
   }
  })

  const className = computed(() => {
   return `v-icon v-icon--${props.name}`
  })

  const symbolId = computed(() => {
   return `#icon-${props.name}`
  })
  return {
   styles,
   symbolId,
   className
  }
 }
})
</script>

<style lang="scss">
.v-icon {
  flex-shrink: 0;
  fill: currentcolor;
  transition: fill $--transition-duration;
}
</style>

<template>
  <div class="v-input__wrapper">
    <div :class="[themeClass, focusedClass, disabledClass, errorClass]"
         class="v-input">
      <span v-if="isPrependSlot"
            class="v-input__prepend">
        <slot name="prepend" />
      </span>
      <input
        :id="name"
        v-model.trim="localModelValue"
        :name="name"
        :type="inputType"
        :placeholder="placeholder"
        class="v-input__element"
        :disabled="disabled"
        :maxlength="maxlength"
        @focus="isFocused = true"
        @blur="isFocused = false"
      >
      <transition name="fade">
        <button v-show="isDisplayBtnClear"
                class="v-input__btn-clear"
                type="button"
                @click="clearInputValue">
          <v-icon name="close"
                  title="clear"
                  size="20"/>
        </button>
      </transition>
            
      <span v-if="isAppendSlot"
            class="v-input__append">
        <slot name="append" />
      </span>
    </div>
    <transition-group name="fade">
      <p v-for="(message, idx) in textErrors"
         :key="idx"
         class="text-error">
        {{ message }}
      </p>
    </transition-group>
        
  </div>
</template>
<script>
const THEMES = ['white']
</script>
<script setup>
import { useSlots, computed, ref } from 'vue'
import { VIcon } from '@/shared/ui'
const props = defineProps({
 theme: {
  type: String,
  required: true,
  validator: value => THEMES.includes(value)
 },
 modelValue: {
  type: [String, Number],
  default: ''
 },
 name: {
  type: String,
  required: true
 },
 inputType: {
  type: String,
  default: 'text'
 },
 placeholder: {
  type: String,
  default: 'text'
 },
 disabled: {
  type: Boolean,
  default: false
 },
 textErrors: {
  type: Object,
  default() {
   return {}
  }
 },
 maxlength: {
  type: [String, Number],
  default: ''
 }
})
const emit = defineEmits(['update:modelValue'])
const slots = useSlots()
const themeClass = computed(() => `theme-${props.theme}`)
const focusedClass = computed(() => isFocused.value ? 'focused' : '')
const disabledClass = computed(() => props.disabled ? 'disabled' : '')
const errorClass = computed(() => props.textErrors.length ? 'error' : '')
const isPrependSlot = computed(() => slots.prepend)
const isAppendSlot = computed(() => slots.append)
const isDisplayBtnClear = computed(() => localModelValue.value ? true : false)
const isFocused = ref(false)
const localModelValue = computed({
 get() {
  // todo получение очищенных от маски значений
  return props.modelValue
 },
 set(value){
  // todo эмит с значением инпута
  // todo эмит не должекн срабатывать при вводе букв
  emit('update:modelValue', value)
 }
})
function clearInputValue() {
 localModelValue.value = ''
}
</script>
<style lang="scss">
@import './styles';
</style>
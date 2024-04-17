<template>
    <v-input
        v-bind="{ ...$attrs }"
        v-model="localModelValue"
        name="phone"
        maxlength="18"
    />
</template>
<script setup>
import { computed, ref } from 'vue'
import { VInput } from '../'
const REG_NUMBERS = /\D/g
const props = defineProps({
 modelValue: {
  type: [String, Number],
  default: ''
 }
})
const emit = defineEmits(['update:modelValue'])
const localModelValue = computed({
 get() {
  // todo получение очищенных от маски значений
  return props.modelValue
 },
 set(value){
  // todo эмит с значением инпута
  // todo эмит не должекн срабатывать при вводе букв
  onPhoneInput(value)
 }
})
function getInputNumbersValue(value) {
 return value.replace(REG_NUMBERS, '')
}
function onPhoneInput(value) {
 let numbersVal = getInputNumbersValue(value)
 let formattedInputValue = ''
 if(!numbersVal) {
  numbersVal = ''
  emit('update:modelValue', numbersVal)
  return
 }
 const isRussianNumber = ['7','8','9'].indexOf(numbersVal[0]) > -1

 if(isRussianNumber) {
  if(numbersVal[0] == '9') {
   numbersVal = '7' + numbersVal
  }
  const firstSymbols = (numbersVal[0] == "8") ? "8" : "+7";
  formattedInputValue =  firstSymbols + " "
  if(numbersVal.length) {
   formattedInputValue += '(' + numbersVal.substring(1, 4);
  }
  if(numbersVal.length >= 5) {
   formattedInputValue += ') ' + numbersVal.substring(4, 7);
  }
  if(numbersVal.length >= 8) {
   formattedInputValue += '-' + numbersVal.substring(7, 9);
  }
  if(numbersVal.length >= 10) {
   formattedInputValue += '-' + numbersVal.substring(9, 11);
  }
 } else {
  formattedInputValue = '+' + numbersVal.substring(0, 16)
 }
 numbersVal = formattedInputValue
 emit('update:modelValue', numbersVal)
}







</script>
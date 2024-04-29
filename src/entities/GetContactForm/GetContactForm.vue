<template>
  <div class="contact-form__wrapper">
    <transition-group name="fade">
      <form v-show="!isDisplaySuccessMessage && !isDisplayRejectMessage"
            key="form"
            class="contact-form"
            autocomplete="off"
            @submit.prevent="onSubmit">
        <div class="contact-form__field">
          <label for="userName">Имя</label>
          <v-input v-model="v$.name.$model" 
                   theme="white"
                   name="userName"
                   inputType="text"
                   placeholder="Имя"
                   maxlength="50"
                   :textErrors="nameErrors"/>
        </div>
        <div class="contact-form__field">
          <label for="userTel">Телефон</label>
          <input-tel-mask v-model="v$.tel.$model"  
                          theme="white"
                          name="userTel"
                          inputType="tel"
                          placeholder="Телефон"
                          :textErrors="telErrors"/>
          <label for="userMail">Электронная почта</label>
          <v-input v-model="v$.mail.$model" 
                   theme="white"
                   name="userMail"
                   inputType="email"
                   placeholder="Электронная почта"
                   maxlength="30"
                   :textErrors="emailErrors"/>
        </div>
        <div class="contact-form__field">
          <v-button class="contact-form__btn"
                    :disabled="!isValidForm"
                    :isFetching="isFetching"
                    theme="purple"
                    type="submit">
            Отправить
          </v-button>
        </div>
    
      </form>
      <div v-show="isDisplaySuccessMessage || isDisplayRejectMessage"
           key="status-message"
           class="contact-form__status-message"
           :class="{'success': isDisplaySuccessMessage, 'reject': isDisplayRejectMessage}">
        <p class="title">
          {{ textStatus }}
        </p>
      </div>
    </transition-group>

  </div>
  
</template>
<script setup>
import { reactive, computed, defineEmits } from 'vue'
import useVuelidate from '@vuelidate/core'
import { minLength, required, email, alpha } from '@vuelidate/validators'
import {VInput, InputTelMask, VButton} from '@/shared/ui'

const TEXT_ERROR_TG = 'Ошибка отправки данных'
const TEXT_SUCCESS_TG = 'Ваша заявка отправлена'
const TEXT_ERROR_MIN_NAME_LENGTH = 'Минимальная длина имени: 2 символа'
const TEXT_ERROR_MIN_TEL_LENGTH = 'Минимальная длина номера телефона: 11 символов '
const TEXT_ERROR_INCORRECT_EMAIL = 'Введенный email некорректен'
const TEXT_ERROR_ONLY_RUSSIANS_LETTERS = 'Поле дожно содержать только кириллицу'

const emit = defineEmits(['submit'])
const props = defineProps({
 isFetching: {
  type: Boolean,
  default: false
 },
 isDisplaySuccessMessage: {
  type: Boolean,
  default: false
 },
 isDisplayRejectMessage: {
  type: Boolean,
  default: false
 }
})
// validation part
const inputsState = reactive({
 name: '',
 tel: '',
 mail: ''
})
const rules = computed(() => ({
 mail: {
  email,
  required
 },
 tel: {
  minLength: minLength(17),
  required
 },
 name: {
  minLength: minLength(2),
  alpha: val => /^[а-яё\s]*$/i.test(val),
  required
 }
}))
const v$ = useVuelidate(rules, inputsState)
const emailErrors = computed(() => {
 const errors = []
 if(v$.value.mail.$dirty && v$.value.mail.email.$invalid) {
  errors.push(TEXT_ERROR_INCORRECT_EMAIL)
 }
 return errors
})
const telErrors = computed(() => {
 const errors = []
 if(v$.value.tel.$dirty && v$.value.tel.minLength.$invalid) {
  errors.push(TEXT_ERROR_MIN_TEL_LENGTH)
 }
 return errors
})
const nameErrors = computed(() => {
 const errors = []
 if(v$.value.name.$dirty && v$.value.name.minLength.$invalid) {
  errors.push(TEXT_ERROR_MIN_NAME_LENGTH)
 } else if(v$.value.name.$dirty && v$.value.name.alpha.$invalid) {
  errors.push(TEXT_ERROR_ONLY_RUSSIANS_LETTERS)
 }
 return errors
})

const isValidForm = computed(() => !v$.value.$error && 
inputsState.name && inputsState.tel && inputsState.mail)
async function onSubmit () {
 v$.value.$touch()
 if (!isValidForm.value) return
 const message = makeMessage()
 emit('submit', message )
}

function makeMessage() {
 let message = `Заявка\n`
 message += `Клиент: ${inputsState.name} \n`
 message += `Телефон: ${inputsState.tel}\n`
 message += `Email: ${inputsState.mail}`
 return message
}
const textStatus = computed(() => {
 if(props.isDisplaySuccessMessage) {
  return TEXT_SUCCESS_TG
 } else if(props.isDisplayRejectMessage) {
  return TEXT_ERROR_TG
 }
 return ''
})
</script>


<style lang="scss">
@import './style.scss';
</style>
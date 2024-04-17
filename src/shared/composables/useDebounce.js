import { ref } from 'vue'

export default function useDebounce(fn, ms) {
 const timeout = ref(null)
 return function() {
  const fnCall = () => fn.apply(this, arguments)

  clearTimeout(timeout.value)
  timeout.value = setTimeout(fnCall, ms)
 }
}

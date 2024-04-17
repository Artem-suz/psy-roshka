import { ref, onMounted, onUnmounted } from 'vue'
import { useDebounce } from './'


const TIME_DEBOUNCE = 0

export default function useScroll() {
 const scrollOffset = ref(0)
	
  
 function handler() {
  scrollOffset.value = window.scrollY
 }

 const debouncedHandler = useDebounce(handler, TIME_DEBOUNCE)
 onMounted(() => window.addEventListener('scroll', debouncedHandler))
 onUnmounted(() => window.removeEventListener('scroll', debouncedHandler))

 return scrollOffset
}
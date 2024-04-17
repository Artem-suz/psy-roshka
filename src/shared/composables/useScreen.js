import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useDebounce } from './'

const TIME_DEBOUNCE = 500
const BREAKPOINTS_MAP = {
 320: 'xs',
 480: 'sm',
 780: 'md',
 1024: 'lg',
 1200: 'xl'
}

export default function useScreen() {
 let screenWidth = ref(window.innerWidth)
  
 const breakpointSign = computed(() => {
  const maxWidth = 1200
  const listBreakpoints = Object.keys(BREAKPOINTS_MAP)
  const curBreakpoint = listBreakpoints.find(breakPoint => screenWidth.value <= breakPoint) ?? maxWidth
  return BREAKPOINTS_MAP[curBreakpoint]
 })
 const debouncedHandler = useDebounce(handler, TIME_DEBOUNCE)
  
  
 function handler() {
  screenWidth.value = window.innerWidth
 }
 onMounted(() => window.addEventListener('resize', debouncedHandler))
 onUnmounted(() => window.removeEventListener('resize', debouncedHandler))

 return breakpointSign 
}

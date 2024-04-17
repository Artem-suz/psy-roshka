import { fileURLToPath, URL } from 'node:url'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
 plugins: [vue(), svgLoader(), createSvgIconsPlugin({
  iconDirs: [path.resolve(process.cwd(), 'src/app/assets/icons')],
  symbolId: 'icon-[dir]-[name]'
 })
 ],
 resolve: {
  alias: {
   '@': fileURLToPath(new URL('./src', import.meta.url))
  }
 },
 css: {
  preprocessorOptions: {
   scss: {
    additionalData: `
    @import "@/app/styles/variables.scss";
    @import "@/app/styles/mixins.scss";
    @import "@/app/styles/functions.scss";
    `
   }
  }
 }
})

import { defineConfig } from 'vite'
import adonisjs from '@adonisjs/vite/client'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
    adonisjs({
      /**
       * Entrypoints of your application. Each entrypoint will
       * result in a separate bundle.
       */
      entrypoints: ['resources/js/app.js'],

      /**
       * Paths to watch and reload the browser on file change
       */
      reload: ['resources/views/**/*.edge', 'resources/views/**/*.vue'],
    }),
  ],
})

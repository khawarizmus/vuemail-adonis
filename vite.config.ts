import { defineConfig } from 'vite'
import adonisjs from '@adonisjs/vite/client'
import vue from '@vitejs/plugin-vue'
import serverRenderLight from './server_render_light/plugin_vite.js'

export default defineConfig({
  plugins: [
    serverRenderLight({ ssr: { entrypoint: 'server_render_light/ssr.ts' } }),
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

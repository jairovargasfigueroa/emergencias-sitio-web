import { tamaguiPlugin } from '@tamagui/vite-plugin'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // El plugin de Tamagui define su propio prefijo de variables; sin esta línea se pierden las VITE_*.
  envPrefix: ['VITE_'],
  plugins: [
    react(),
    tamaguiPlugin({
      config: './src/tamagui.config.ts',
      components: ['tamagui'],
      disableExtraction: true,
    }),
  ],
})

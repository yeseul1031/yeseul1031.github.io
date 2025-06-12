import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/yeseul1031.github.io/',
  plugins: [react()],
  resolve: {
    alias: {
      crypto: 'crypto-browserify',
      buffer: 'buffer',
      stream: 'stream-browserify',
      'safe-buffer': 'safe-buffer'
    }
  },
  define: {
    global: {},
    'process.env.NODE_DEBUG': 'false' 
  }
})

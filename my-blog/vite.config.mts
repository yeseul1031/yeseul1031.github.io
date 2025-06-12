import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/yeseul1031.github.io/',
  plugins: [react()],
  
  
  server: {
    proxy: {
      '/api/naver-rss': {
        target: 'https://rss.blog.naver.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/naver-rss/, '/oi1090_.xml'),
        secure: false
      }
    }
  },

  resolve: {
    alias: {
      crypto: 'crypto-browserify',
      stream: 'stream-browserify',
      'safe-buffer': 'safe-buffer',
      buffer: 'buffer'
    }
  },
  
 
  define: {
    global: 'globalThis',
    'process.env.NODE_DEBUG': JSON.stringify('false')
  },
  
  
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
})

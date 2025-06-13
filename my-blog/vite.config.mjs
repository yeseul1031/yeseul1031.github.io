import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000, // 청크 크기 경고 제한 상향
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          router: ['react-router-dom']
        }
      }
    }
  },
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
  esbuild: {
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment'
  }
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  base: '/',
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    nodePolyfills({
      include: ['crypto', 'stream', 'buffer', 'util'],
      globals: { Buffer: true, process: true },
    }),
    visualizer({
      template: 'treemap',
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  
  server: {
    port: 3000,
    host: true,
    open: '/explorer',
    proxy: {
      '/api/naver-rss': {
        target: 'https://rss.blog.naver.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/naver-rss/, '/oi1090_.xml'),
        headers: {
          'X-Custom-Header': 'vite-proxy',
        },
      },
    },
  },

  resolve: {
    alias: {
      '@': '/src',
      '~': '/public',
    },
  },

  define: {
    global: 'globalThis',
    'process.env.NODE_DEBUG': JSON.stringify(false),
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },

  build: {
    outDir: 'dist',
    sourcemap: true,
    commonjsOptions: {
      transformMixedEsModules: true,
      include: [/node_modules/],
    },
    rollupOptions: {
      external: ['react-router-dom'],
      output: {
        manualChunks: {
          ethers: ['ethers'],
          react: ['react', 'react-dom'],
        },
      },
    },
  },

  optimizeDeps: {
    include: [
      'crypto-browserify',
      'stream-browserify',
      'buffer',
      '@emotion/react',
      '@emotion/styled',
    ],
    esbuildOptions: {
      target: 'es2020',
    },
  },
});

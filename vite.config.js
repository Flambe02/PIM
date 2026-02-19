import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  // 👉 racine du domaine personnalisé
  base: '/',
  plugins: [
    react({
      // Use React's automatic runtime
      jsxRuntime: 'automatic',
    }),
  ],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json']
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  build: {
    // Optimisations de performance
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
        },
      },
    },
    // Optimisation des assets
    assetsInlineLimit: 4096, // Inline les petits assets
    chunkSizeWarningLimit: 1000,
  },
  // Optimisations de développement
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
})

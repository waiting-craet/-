import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei', '@react-three/postprocessing'],
          'mediapipe': ['@mediapipe/tasks-vision'],
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
    target: 'esnext',
    minify: 'esbuild',
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port: 5173,
    host: true,
  },
  preview: {
    port: 4173,
    host: true,
  },
  define: {
    global: 'globalThis',
  },
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei'],
  },
  ssr: {
    noExternal: ['three', '@react-three/fiber', '@react-three/drei'],
  },
})

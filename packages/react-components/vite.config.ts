import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts({ tsconfigPath: 'tsconfig.app.json'})],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'dist/index.ts'),
      formats: ['es']
    }
  }
})

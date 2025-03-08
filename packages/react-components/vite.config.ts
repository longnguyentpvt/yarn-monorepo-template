import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import { glob } from 'glob'
import react from '@vitejs/plugin-react'
import path, { resolve } from 'node:path'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), libInjectCss(), dts({ tsconfigPath: 'tsconfig.app.json'})],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es']
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      input: Object.fromEntries(
        glob.sync(['src/components/**/index.tsx', 'src/index.ts']).map((file) => {
          // This remove `src/` as well as the file extension from each
          // file, so e.g. src/nested/foo.js becomes nested/foo
          const entryName = path.relative(
            'src',
            file.slice(0, file.length - path.extname(file).length)
          )
          console.log('file', entryName);

          // This expands the relative paths to absolute paths, so e.g.
          // src/nested/foo becomes /project/src/nested/foo.js
          const entryUrl = fileURLToPath(new URL(file, import.meta.url))
          const finalName = entryName.replace('/index', '')
          return [finalName, entryUrl]
        })
      ),
      output: {
        entryFileNames: (chunkInfo) => {
          const { name } =chunkInfo;
          if (name !== 'index') {
            return `${name}/index.js`
          }

          return 'index.js';
        },
        assetFileNames: 'assets/[name][extname]',
        globals: {
          react: 'React',
          'react-dom': 'React-dom',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
    },
  }
})

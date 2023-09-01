import { defineConfig } from 'astro/config'

const outDirectory = 'hoge/fuga/piyo/'

// https://astro.build/config
export default defineConfig({
  base: `${outDirectory}`,
  outDir: `./dist/${outDirectory}`,
  site: 'https://www.my-site.dev',
  build: {
    format: 'file',
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          entryFileNames: `assets/scripts/global.js`,
          // chunkFileNames: `assets/scripts/[name].js`,
          assetFileNames: (asset) => {
            if (/\.css$/.test(asset.name ?? '')) {
              return 'assets/styles/global.css'
            } else if (/\.(jpe?g|png|svg)$/.test(asset.name)) {
              return 'assets/images/[name].[ext]'
            }
            return 'assets/[name].[ext]'
          },
        },
      },
    },
  },
})

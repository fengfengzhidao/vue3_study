import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { vitePluginForArco } from '@arco-plugins/vite-vue'

interface ImportMetaEnv {
  VITE_SERVER_URL: string
}

// https://vite.dev/config/
export default defineConfig(({mode})=>{
  console.log(mode)
  const env: Record<keyof ImportMetaEnv, string> = loadEnv(mode, process.cwd())
  console.log(env.VITE_SERVER_URL)
  return {
    plugins: [
      vue(),
      vueDevTools(),
      // vitePluginForArco({
      //   style: 'css'
      // })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
    server: {
      proxy: {
        "/api": {
          target: env.VITE_SERVER_URL,
          changeOrigin: true,
        },
        "/xxx": {
          target: env.VITE_SERVER_URL,
          changeOrigin: true,
          rewrite(path) {
            console.log(path)
            return path.replace("/xxx", "")
          },
        }
      }
    }
  }
})

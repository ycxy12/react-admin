import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname, "./src"),
        },
    },
    server: {
        host: "0.0.0.0", // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
        port: 1217,
        open: true, //运行 npm run serve 时自动打开浏览器
        cors: true,
        // https: false,
        // 代理跨域（mock 不需要配置，这里只是个事列）
        proxy: {
            "/api": {
                // target: "https://www.fastmock.site/mock/5431bd867a87c7c688211f6e7a1522be/api", // fastmock ycxy12/q1111111
                target: "https://ycxy12.usemock.com", // useMock 17719317581 q1111111
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    },
    plugins: [
        react(),
        // * 使用 svg 图标
        createSvgIconsPlugin({
            iconDirs: [resolve(process.cwd(), "src/assets/icons")],
            symbolId: "icon-[dir]-[name]",
        }),
    ],
    esbuild: {
        pure: ["console.log", "debugger"], // 删除生产环境 console
    },
})

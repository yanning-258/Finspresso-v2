import { defineConfig } from "vite";

export default defineConfig({
    build: {
        outDir: '../frontend/dist'
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                changeOrigin: true,
            }
        }
    }
})
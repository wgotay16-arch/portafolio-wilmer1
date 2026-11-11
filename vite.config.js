
import { defineConfig } from 'vite';

export default defineConfig({
    base: '/portafolio-wilmer1/',
    server: {
        open: true
    },
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        cssMinify: true
    }
});

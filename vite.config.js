import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    define: {
        'process.env.NODE_ENV': JSON.stringify('production'),
    },
    base: './',
    build: {
        lib: {
            entry: 'src/main.jsx',
            name: 'AgileScribeWidget',
            fileName: 'agile-scribe-widget',
            formats: ['iife'],
        },
    },
});

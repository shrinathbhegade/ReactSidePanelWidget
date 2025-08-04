import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => ({
    plugins: [react()],
    define: {
        'process.env.NODE_ENV': JSON.stringify(mode),
    },
    base: './',
    build: {
        //outDir: path.resolve('D:\\AgileEMR\\Agile.Suite\\Web\\Agile.Web\\Scripts\\agility\\widgets'), // Adjust path to MVC folder
        emptyOutDir: true,
        lib: {
            entry: 'src/main.jsx',
            name: 'AgileScribeWidget',
            fileName: 'agile-scribe-widget',
            formats: ['iife'],
        },
        sourcemap: mode === 'development', // Enable source maps for debug builds
        minify: mode !== 'development',    // Disable minification in development
    },
}));

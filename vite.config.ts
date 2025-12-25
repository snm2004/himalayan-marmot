import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const isProduction = mode === 'production';
    
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react({
          // Optimize React in production
          jsxRuntime: 'automatic'
        })
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.VITE_GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        // Optimize build for production
        target: 'es2015',
        minify: 'terser',
        terserOptions: {
          compress: {
            drop_console: isProduction,
            drop_debugger: isProduction,
          },
        },
        rollupOptions: {
          output: {
            // Manual chunk splitting for better caching
            manualChunks: {
              vendor: ['react', 'react-dom', 'react-router-dom'],
              ui: ['@headlessui/react', '@heroicons/react'],
            },
          },
        },
        // Enable source maps in development
        sourcemap: !isProduction,
        // Optimize chunk size
        chunkSizeWarningLimit: 1000,
      },
      optimizeDeps: {
        // Pre-bundle dependencies
        include: ['react', 'react-dom', 'react-router-dom'],
        // Exclude large dependencies from pre-bundling
        exclude: ['@google/genai']
      },
      css: {
        // CSS code splitting
        devSourcemap: !isProduction,
      },
      // Enable gzip compression
      ...(isProduction && {
        build: {
          ...{
            target: 'es2015',
            minify: 'terser',
            terserOptions: {
              compress: {
                drop_console: true,
                drop_debugger: true,
              },
            },
            rollupOptions: {
              output: {
                manualChunks: {
                  vendor: ['react', 'react-dom', 'react-router-dom'],
                  ui: ['@headlessui/react', '@heroicons/react'],
                },
              },
            },
            sourcemap: false,
            chunkSizeWarningLimit: 1000,
          },
          // Additional production optimizations
          reportCompressedSize: false,
          assetsInlineLimit: 4096,
        }
      })
    };
});

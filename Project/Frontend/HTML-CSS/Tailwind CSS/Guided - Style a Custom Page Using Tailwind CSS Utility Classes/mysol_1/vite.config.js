// vite.config.js
/// <reference types="vitest" />
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom', 
    include: ['__tests__/**/*.test.js'], 
  },
})

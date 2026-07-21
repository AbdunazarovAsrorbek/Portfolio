import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: '172.16.25.5',
  //   port: 5173,
  //   strictPort: true,
  // },
})
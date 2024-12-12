import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// DaisyUI ไม่จำเป็นต้องใช้ require หรือ import ใน vite.config.js
export default defineConfig({
  plugins: [
    react()
  ],
});

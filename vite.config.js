import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]

  }
)

// build: {
//   rollupOptions: {
//     external: [
//       '/Users/farhan/React-projects/farhan-portfolio/src/assets/portfolio/dashboard.jpeg',
//     '/Users/farhan/React-projects/farhan-portfolio/src/assets/portfolio/JWT.png',
//      '/Users/farhan/React-projects/farhan-portfolio/src/assets/portfolio/MUI-Dashboard.png',
//       '/Users/farhan/React-projects/farhan-portfolio/src/assets/portfolio/Personal-Website.png',
//        '/Users/farhan/React-projects/farhan-portfolio/src/assets/portfolio/asp-mvc.jpeg',
//        '/Users/farhan/React-projects/farhan-portfolio/src/assets/portfolio/Youtube.jpeg'
//     ]
//   }

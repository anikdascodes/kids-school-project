/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        fredoka: ['Fredoka Variable', 'sans-serif'],
        bubblegum: ['Bubblegum Sans', 'cursive'],
      },
      colors: {
        primary: '#FF6B6B',
        secondary: '#4ECDC4',
        accent: '#FFE66D',
        background: '#F7F7F7',
      },
    },
  },
  plugins: [],
}
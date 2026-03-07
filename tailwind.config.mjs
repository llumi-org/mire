/** @type {import('tailwindcss').Config} */
export default {
  content: ['./**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    'prose',
    'prose-lg',
    'prose-indigo',
    'katex-display' // For math
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
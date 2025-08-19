/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        brandblack: '#18181b',
        brandgray: '#232323',
        brandwhite: '#ffffff',
        brandviolet: '#9c27b0',
        brandlavande: '#9575cd',
        brandgraylight: '#e5e7eb',
        'light-gray': '#E0E0E0',
      },
      boxShadow: {
        'violet-md': '0 6px 10px -1px rgba(156, 39, 176, 0.18), 0 4px 8px -1px rgba(156, 39, 176, 0.12)',
        'violet-lg': '0 12px 20px -3px rgba(156, 39, 176, 0.15), 0 6px 10px -2px rgba(156, 39, 176, 0.1)',
        'violet-xl': '0 25px 35px -5px rgba(156, 39, 176, 0.25), 0 15px 20px -5px rgba(156, 39, 176, 0.15)',
      },
    },
  },
  plugins: [],
}

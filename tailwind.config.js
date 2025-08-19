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
        'violet-md': '0 4px 6px -1px rgba(156, 39, 176, 0.1), 0 2px 4px -1px rgba(156, 39, 176, 0.06)',
        'violet-xl': '0 20px 25px -5px rgba(156, 39, 176, 0.15), 0 10px 10px -5px rgba(156, 39, 176, 0.1)',
      },
    },
  },
  plugins: [],
}

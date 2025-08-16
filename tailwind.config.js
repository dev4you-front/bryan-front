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
    },
  },
  plugins: [],
}

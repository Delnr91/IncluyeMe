import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A4ABF',
        secondary: '#1E2A3A',
        accent: '#00B87C',
        background: '#FFFFFF',
        neutral: '#F4F7FA',
      },
    },
  },
  plugins: [],
}

export default config
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'soft-pink': '#CEA7E0',
        'soft-gold': '#FBF4B5',
        'soft-purple': '#AB8FE6',
        'dark-purple': '#392177',
        'off-white': '#F8FAFC',
        'soft-blue': '#99ccff',
        'soft-blue-two': '#97bdff'
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      fontFamily: {
        body: ['Open Sans']
      }
    },
  },
  plugins: [],
}
export default config

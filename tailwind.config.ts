import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'dark-gray': '#1F1F1F',
        'dark-gray-2': '#474747',
        'dark-gray-3': '#666',
        'light-gray': '#8F8F8F',
        'light-gray-2': '#CCC',
        'light-gray-3': '#F5F5F5',
        primary: '#C92071',
        secondary: '#B5B6F2',
        terciary: '#991956',
        error: 'EE4266',
        success: '#52CA76',
        warning: '#F6AA1C',
      },
    },
  },
  plugins: [],
}
export default config

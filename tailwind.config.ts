import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      // Cabin_Codensed
      cabin: ['Cabin', 'sans-serif'],
      // Cabin if I need
      // Work Sans
      sans_light: ['WorkSans-Light', 'sans-serif'],
      sans_regular: ['WorkSans-Regular', 'sans-serif'],
      sans_medium: ['WorkSans-Medium', 'sans-serif'],
      sans_bold: ['WorkSans-Bold', 'sans-serif'],
      //'sans': ['sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config

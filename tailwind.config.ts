import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './node_modules/flowbite-react/lib/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-1': 'var(--color-primary-1)',
        'primary-2': 'var(--color-primary-2)',
        'black-1': 'var(--color-black-1)',
        'black-2': 'var(--color-black-2)',
        'black-3': 'var(--color-black-3)',
        'black-4': 'var(--color-black-4)',
        'yellow-1': 'var(--color-yellow-1)',
        'gray-1': 'var(--color-gray-1)',
      },
      backgroundImage: {
        'yellow-gradient':
          'linear-gradient(180deg,#ffba0a,rgba(255,186,10,0.23)94.27%,rgba(255,186,10,0.29)99.99%,rgba(255,186,10,0))',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
export default config;

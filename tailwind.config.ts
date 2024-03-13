import { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        container: "940px",
        background: "274px",
        card: "138px",
        addons: "450px",
      },
      boxShadow: {
        custom: '0px 4px 6px 0px rgba(54, 78, 126, 0.10)',
      },
      transitionProperty: {
        'transform': 'transform',
      },
    },
    fontSize: {
      xs: "12px",
      base: "14px",
      s: "16px",
      sm: "18px",
      m: "24px",
      l: "32px",
      lg: "40px",
      xl: "56px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "940px",
      xl: "1280px",
    },
    colors: {
      background: 'var(--color-background)',
      'text-primary': 'var(--color-text-primary)',
      'text-secondary': 'var(--color-text-secondary)',
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      success: 'var(--color-success)',
      info: 'var(--color-info)',
      warning: 'var(--color-warning)',
      highlight: 'var(--color-highlight)',
      'dark-blue': 'var(--color-dark-blue)',
      'light-blue': 'var(--color-light-blue)',
      grey: {
        100: 'var(--color-grey-100)',
      },
    },
  },
  darkMode: 'class',
  variants: {
    extend: {},
  },
  plugins: [],
};

export default config;

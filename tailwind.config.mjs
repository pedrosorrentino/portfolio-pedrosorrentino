/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        flip: 'flip 6s infinite steps(2, end)',
        rotate: 'rotate 3s linear infinite both',
      },
      keyframes: {
        flip: {
          to: {
            transform: 'rotate(360deg)',
          },
        },
        rotate: {
          to: {
            transform: 'rotate(90deg)',
          },
        },
      },
      colors: {
        brand: {
          background: 'rgb(var(--color-bg) / <alpha-value>)',
          surface: 'rgb(var(--color-surface) / <alpha-value>)',
          border: 'rgb(var(--color-border) / <alpha-value>)',
          'border-accent': 'rgb(var(--color-border-accent) / <alpha-value>)',

          'text-primary': 'rgb(var(--color-text-primary) / <alpha-value>)',
          'text-secondary': 'rgb(var(--color-text-secondary) / <alpha-value>)',
          'text-muted': 'rgb(var(--color-text-muted) / <alpha-value>)',
          'text-inverted': 'rgb(var(--color-text-inverted) / <alpha-value>)',

          'accent-primary': 'rgb(var(--color-accent-primary) / <alpha-value>)',
          'accent-primary-state':
            'rgb(var(--color-accent-primary-state) / <alpha-value>)',
          'accent-secondary':
            'rgb(var(--color-accent-secondary) / <alpha-value>)',
          'accent-secondary-state':
            'rgb(var(--color-accent-secondary-state) / <alpha-value>)',

          interactive: 'rgb(var(--color-interactive) / <alpha-value>)',
          'interactive-state':
            'rgb(var(--color-interactive-state) / <alpha-value>)',
          'interactive-fg': 'rgb(var(--color-interactive-fg) / <alpha-value>)',

          'tag-bg': 'rgb(var(--color-tag-bg) / <alpha-value>)',
          'tag-text': 'rgb(var(--color-tag-text) / <alpha-value>)',

          'code-bg': 'rgb(var(--color-code-bg) / <alpha-value>)',

          success: 'rgb(var(--color-success) / <alpha-value>)',
          'success-bg': 'rgb(var(--color-success-bg) / <alpha-value>)',
          'success-fg': 'rgb(var(--color-success-fg) / <alpha-value>)',
          error: 'rgb(var(--color-error) / <alpha-value>)',
          'error-bg': 'rgb(var(--color-error-bg) / <alpha-value>)',
          'error-fg': 'rgb(var(--color-error-fg) / <alpha-value>)',
          warning: 'rgb(var(--color-warning) / <alpha-value>)',
          'warning-bg': 'rgb(var(--color-warning-bg) / <alpha-value>)',
          'warning-fg': 'rgb(var(--color-warning-fg) / <alpha-value>)',
          info: 'rgb(var(--color-info) / <alpha-value>)',
          'info-bg': 'rgb(var(--color-info-bg) / <alpha-value>)',
          'info-fg': 'rgb(var(--color-info-fg) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      // 🎨 Couleurs globales Hive Flow
      colors: {
        // Identité Hive Flow
        primary: {
          50: '#fef8e7',
          100: '#fdefc4',
          200: '#fbdf8c',
          300: '#f9c74f', // Couleur principale (jaune miel)
          400: '#f7b32b',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        secondary: {
          50: '#fdf4f3',
          100: '#fce8e5',
          200: '#f9d5cf',
          300: '#f4b5ab',
          400: '#ed8a7a',
          500: '#e3654f', // Orange terracotta
          600: '#cf4a36',
          700: '#ad3c2b',
          800: '#8f3527',
          900: '#773126',
        },
        neutral: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
        
        // 🔨 Thème Artisans (bleu profond / craft)
        artisan: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6', // Bleu principal artisans
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        
        // 🤝 Thème Associations (vert chaleureux / solidarité)
        association: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e', // Vert principal associations
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        
        // 🏢 Thème Entreprises (violet premium / innovation)
        enterprise: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7', // Violet principal entreprises
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
      },
      
      // 📝 Typographie
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', fontWeight: '700' }], // 72px
        'display-lg': ['3.75rem', { lineHeight: '1.1', fontWeight: '700' }], // 60px
        'display-md': ['3rem', { lineHeight: '1.2', fontWeight: '700' }], // 48px
        'display-sm': ['2.25rem', { lineHeight: '1.2', fontWeight: '600' }], // 36px
        'heading-xl': ['1.875rem', { lineHeight: '1.3', fontWeight: '600' }], // 30px
        'heading-lg': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }], // 24px
        'heading-md': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }], // 20px
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }], // 18px
        'body-md': ['1rem', { lineHeight: '1.6', fontWeight: '400' }], // 16px
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }], // 14px
      },
      
      // 📏 Espacements personnalisés
      spacing: {
        '18': '4.5rem', // 72px
        '22': '5.5rem', // 88px
        '26': '6.5rem', // 104px
        '30': '7.5rem', // 120px
      },
      
      // 🔵 Radius
      borderRadius: {
        'sm': '0.375rem', // 6px
        'DEFAULT': '0.5rem', // 8px
        'md': '0.75rem', // 12px
        'lg': '1rem', // 16px
        'xl': '1.5rem', // 24px
        '2xl': '2rem', // 32px
      },
      
      // 🎭 Animations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      
      // 🌈 Dégradés
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #f9c74f 0%, #f59e0b 100%)',
        'gradient-artisan': 'linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)',
        'gradient-association': 'linear-gradient(135deg, #4ade80 0%, #16a34a 100%)',
        'gradient-enterprise': 'linear-gradient(135deg, #c084fc 0%, #9333ea 100%)',
      },
    },
  },
  plugins: [],
}
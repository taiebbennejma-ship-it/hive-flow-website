/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      // 🎨 Couleurs globales Hive Flow - Inspirées du monde des abeilles
      colors: {
        // Identité Hive Flow - Tons miel et cire d'abeille
        primary: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',  // Miel doré
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // Accent - Ambre chaud
        secondary: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // Neutres - Tons naturels
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
        
        // 🔨 Thème Artisans (bleu profond)
        artisan: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        
        // 🤝 Thème Associations (vert nature)
        association: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        
        // 🏢 Thème Entreprises (violet premium)
        enterprise: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
      },
      
      // 📝 Typographie améliorée avec meilleur espacement
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.02em' }],
        'display-lg': ['3.75rem', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.02em' }],
        'display-md': ['3rem', { lineHeight: '1.15', fontWeight: '700', letterSpacing: '-0.01em' }],
        'display-sm': ['2.25rem', { lineHeight: '1.2', fontWeight: '600', letterSpacing: '-0.01em' }],
        'heading-xl': ['2rem', { lineHeight: '1.3', fontWeight: '600', letterSpacing: '-0.01em' }],
        'heading-lg': ['1.5rem', { lineHeight: '1.4', fontWeight: '600', letterSpacing: '0' }],
        'heading-md': ['1.25rem', { lineHeight: '1.5', fontWeight: '600', letterSpacing: '0' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400', letterSpacing: '0' }],
        'body-md': ['1rem', { lineHeight: '1.7', fontWeight: '400', letterSpacing: '0' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6', fontWeight: '400', letterSpacing: '0' }],
      },
      
      // 📏 Espacements généreux
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },
      
      // 🔵 Radius doux
      borderRadius: {
        'sm': '0.5rem',
        'DEFAULT': '0.75rem',
        'md': '1rem',
        'lg': '1.5rem',
        'xl': '2rem',
        '2xl': '2.5rem',
      },
      
      // 🎭 Animations fluides
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.7s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      
      // 🌈 Dégradés miel
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
        'gradient-honey': 'linear-gradient(180deg, #fef3c7 0%, #fde68a 100%)',
        'gradient-artisan': 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #2563eb 100%)',
        'gradient-association': 'linear-gradient(135deg, #4ade80 0%, #22c55e 50%, #16a34a 100%)',
        'gradient-enterprise': 'linear-gradient(135deg, #c084fc 0%, #a855f7 50%, #9333ea 100%)',
      },
      
      // 🔲 Ombres subtiles
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 30px -5px rgba(0, 0, 0, 0.04)',
        'strong': '0 20px 50px -12px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
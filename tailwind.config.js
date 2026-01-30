/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      colors: {
        gold: {
          400: '#FACC15',
          500: '#D4AF37', // Deep Metallic Gold
          600: '#B4942B',
          700: '#8B6F1E',
        },
        obsidian: {
          DEFAULT: '#050505',
          light: '#0A0A0A',
          deep: '#030303',
        },
        slate: {
          800: '#1E293B',
          900: '#0F172A',
        },
        charcoal: '#0F0F0F',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'metallic-gold': 'linear-gradient(135deg, #D4AF37 0%, #FACC15 50%, #B4942B 100%)',
        'stealth-dark': 'linear-gradient(180deg, rgba(10,10,10,1) 0%, rgba(5,5,5,1) 100%)',
      },
      letterSpacing: {
        'ultra-wide': '0.35em',
        'tightest': '-0.04em',
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}

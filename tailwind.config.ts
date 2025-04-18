import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sulu: "var(--accent-sulu)",
        orange: "var(--accent-orange)",
        secondary: "var(--secondary)"
      },
      boxShadow: {
        btn: "0 0 14px 0 var(--accent-sulu)"
      },
      transitionDuration: {
        '250': '250ms'
      },
      borderRadius: {
        '15': '15px'
      },
      borderWidth: {
        '3': '3px'
      },
      padding: {
        '25px': '25px'
      },
      fontSize: {
        '13': '13px'
      },
      backgroundImage: {
        // 'mcap': "url('/mcapcard.webp')",
        'mcap': "url('/mcapcard.png')",
        'socnet': "url('/socnet.webp')"
      },
      aspectRatio: {
        '39/25': '39/25',
        '96/37': '96/37'
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translate(-50%)' }
        }
      },
      animation: {
        'scroll': 'scroll 20s linear infinite'
      },
      screens: {
        'xs': '576px',
        'sm': '768px',
        'md': '992px',
        'lg': '1200px',
        'xl': '1440px'
      }
    },
  },
  plugins: [],
} satisfies Config;

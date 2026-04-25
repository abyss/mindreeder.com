/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./assets/**/*.js",
    "./static/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0f",
        "bg-surface": "#0f0f1a",
        "bg-elevated": "#151523",
        "bg-card": "#12121e",
        purple: {
          DEFAULT: "#4a1d96",
          light: "#6d28d9",
          dark: "#2e1065",
          glow: "#7c3aed",
        },
        gold: {
          DEFAULT: "#d4a017",
          light: "#e8b84b",
          dark: "#a87c10",
          pale: "#f5e6a3",
        },
        mist: {
          DEFAULT: "#8b9ab5",
          light: "#c4cdd9",
          dark: "#4a5568",
        },
      },
      fontFamily: {
        cormorant: ["Cormorant Garant", "Georgia", "serif"],
        inter: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem, 4vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.1" }],
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "112": "28rem",
        "128": "32rem",
      },
      backgroundImage: {
        "radial-gold": "radial-gradient(ellipse at center, rgba(212,160,23,0.15) 0%, transparent 70%)",
        "radial-purple": "radial-gradient(ellipse at center, rgba(74,29,150,0.3) 0%, transparent 70%)",
        "hero-gradient": "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(74,29,150,0.25) 0%, rgba(10,10,15,0) 70%)",
        "card-gradient": "linear-gradient(135deg, rgba(21,21,35,0.9) 0%, rgba(10,10,15,0.95) 100%)",
        "gold-shimmer": "linear-gradient(90deg, transparent, rgba(212,160,23,0.4), transparent)",
      },
      boxShadow: {
        "gold-sm": "0 0 15px rgba(212,160,23,0.15)",
        "gold-md": "0 0 30px rgba(212,160,23,0.2)",
        "gold-lg": "0 0 60px rgba(212,160,23,0.15)",
        "purple-sm": "0 0 15px rgba(74,29,150,0.3)",
        "purple-md": "0 0 40px rgba(74,29,150,0.4)",
        "card": "0 4px 24px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.04) inset",
        "card-hover": "0 8px 48px rgba(0,0,0,0.8), 0 0 0 1px rgba(212,160,23,0.15)",
      },
      borderColor: {
        "gold-subtle": "rgba(212,160,23,0.2)",
        "gold-bright": "rgba(212,160,23,0.5)",
        "purple-subtle": "rgba(74,29,150,0.3)",
        "white-subtle": "rgba(255,255,255,0.06)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        "shimmer": "shimmer 3s infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-gold": "pulseGold 3s ease-in-out infinite",
        "reveal-line": "revealLine 0.8s ease forwards",
        "curtain": "curtain 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGold: {
          "0%, 100%": { opacity: "0.6", boxShadow: "0 0 20px rgba(212,160,23,0.2)" },
          "50%": { opacity: "1", boxShadow: "0 0 40px rgba(212,160,23,0.4)" },
        },
        revealLine: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        curtain: {
          "0%": { transform: "scaleX(1)" },
          "100%": { transform: "scaleX(0)" },
        },
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
        "in-out-expo": "cubic-bezier(0.87, 0, 0.13, 1)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage:{
        // light
        "light-lavender": "linear-gradient(135deg, #f3e7ff, #e8d5ff, #dfe3fa)",
        "light-sky":      "linear-gradient(135deg, #e0f4ff, #c8e9ff, #b0d4f1)",
        "light-peach":    "linear-gradient(135deg, #fff0e6, #ffe0cc, #ffd0b0)",
        "light-mint":     "linear-gradient(135deg, #e6fff5, #ccffe8, #b0ffd8)",
        "light-rose":     "linear-gradient(135deg, #fff0f5, #ffe0eb, #ffc8d8)",

        // Dark
        "dark-hero":    "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        "dark-purple":  "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
        "dark-navy":    "linear-gradient(135deg, #0d0d1a, #1e2139, #252945)",
        "dark-ember":   "linear-gradient(135deg, #1a0a00, #3d1c00, #7c3500)",
        "dark-teal":    "linear-gradient(135deg, #001a1a, #003333, #004d4d)",
      },
      colors: {
        // dark buttons
        "btn-dark-hero":   { DEFAULT: "#302b63", hover: "#24243e", text: "#e8d5ff" },
        "btn-dark-purple": { DEFAULT: "#0f3460", hover: "#16213e", text: "#c8e9ff" },
        "btn-dark-navy":   { DEFAULT: "#252945", hover: "#1e2139", text: "#dfe3fa" },
        "btn-dark-ember":  { DEFAULT: "#7c3500", hover: "#3d1c00", text: "#ffd0b0" },
        "btn-dark-teal":   { DEFAULT: "#004d4d", hover: "#003333", text: "#b0ffd8" },

        // Light buttons 
        "btn-light-lavender": { DEFAULT: "#7c5dfa", hover: "#9277ff", text: "#ffffff" },
        "btn-light-sky":      { DEFAULT: "#1a8fe3", hover: "#1070c0", text: "#ffffff" },
        "btn-light-peach":    { DEFAULT: "#e8702a", hover: "#c45a1a", text: "#ffffff" },
        "btn-light-mint":     { DEFAULT: "#00a86b", hover: "#008855", text: "#ffffff" },
        "btn-light-rose":     { DEFAULT: "#e8366b", hover: "#c42050", text: "#ffffff" },
      }
    },
  },
  plugins: [],
}


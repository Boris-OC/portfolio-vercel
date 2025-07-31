module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',       // bleu profond
        secondary: '#1e293b',     // gris très foncé
        accent: '#38bdf8',        // bleu clair
        light: '#f8fafc',         // fond clair
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        title: ['Anton', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

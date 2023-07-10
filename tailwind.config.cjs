const withOpacity = (variableName) => ({ opacityValue }) => opacityValue !== undefined ? `rgba(var(${variableName}), ${opacityValue})` : `rgb(var(${variableName}))`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,md,mdx,svelte,ts}"],
  theme: {
    screens: {
      xs: "320px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1024px"
    },
    textColor: {
      base: withOpacity("--color-text-base"),
      accent: withOpacity("--color-accent"),
      inverted: withOpacity("--color-fill"),
    },
    backgroundColor: {
      fill: withOpacity("--color-fill"),
      accent: withOpacity("--color-accent"),
      inverted: withOpacity("--color-text-base"),
      card: withOpacity("--color-card"),
      "card-muted": withOpacity("--color-card-muted"),
    },
    outlineColor: {
      fill: withOpacity("--color-accent"),
    },
    borderColor: {
      line: withOpacity("--color-border"),
      fill: withOpacity("--color-text-base"),
      accent: withOpacity("--color-accent"),
    },
    fill: {
      base: withOpacity("--color-text-base"),
      accent: withOpacity("--color-accent"),
      transparent: "transparent",
    },
    fontFamily: {
      mono: ["IBM Plex Mono", "monospace"],
    }
  },
  plugins: [require("@tailwindcss/typography")],
};

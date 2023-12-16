const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

const accent = {
  200: "hsl(var(--sl-hue-blue),40%,85%)" /* hsl(222,40,85) - sl-color-accent-hight */,
  600: "hsl(var(--sl-hue-blue),71%,28%)" /* hsl(222,71,28) - sl-color-accent */,
  900: "hsl(var(--sl-hue-blue),70%,15%)" /* hsl(222,70,15) - sl-color-accent-low */,
};

const gray = {
  100: "#f5f6f8",
  300: "#eceef2",
  400: "#c0c2c7",
  500: "#888b96",
  600: "#545861",
  700: "#353841",
  800: "#24272f",
  900: "#17181c",
  1000: "#04080b",
};

const starlightStyles = {
  /* Dark mode colors. */
  ":root": {
    /* CONCEPT10 blue hue */
    "--sl-hue-blue": "215",

    "--sl-color-blue-low": "hsl(var(--sl-hue-blue) 45% 20%)",

    "--sl-hue-orange": "29",
    "--sl-color-orange-low": "hsl(var(--sl-hue-orange) 25% 20%)",
    "--sl-color-orange-high": "hsl(var(--sl-hue-orange) 82% 70%)",
  },

  /* Light mode colors. */
  ":root[data-theme='light']": {
    "--sl-color-bg": "var(--sl-color-gray-5)",
    "--sl-color-bg-nav": "var(--sl-color-gray-7)",

    "--sl-color-blue-low": "hsl(var(--sl-hue-blue) 40% 80%)",

    "--sl-color-orange-low": "hsl(var(--sl-hue-orange) 60% 85%)",
    "--sl-color-orange-high": "hsl(var(--sl-hue-orange) 60% 50%)",

    "--sl-color-green": "hsl(var(--sl-hue-green) 90% 35%)",
  },

  /** Starlight style modifications. */
  ":root[data-theme='light'] .sl-markdown-content tr:nth-child(2n)": {
    "background-color": "hsl(var(--sl-hue-blue) 18% 90%)",
  },
  ":root[data-theme='light'] .sl-markdown-content table": {
    "border-color": "#e1e4ea",
  },

  ".sl-markdown-content figure figcaption": {
    "margin-top": "0.5rem",
    "margin-left": "0.5em",
    font: "var(--sl-font-mono)",
    "font-size": "0.9em",
  },

  ".sl-markdown-content table": {
    display: "table",
  },
  ".sl-markdown-content th": {
    "text-align": "left",
  },
  ".sl-markdown-content table th": {
    padding: "0.25rem 0.5rem",
  },
  ".sl-markdown-content table td": {
    padding: "0.25rem 0.5rem",
  },
  ".sl-markdown-content table a": {
    transition: "color 0.1s ease",
    "margin-right": "1rem",
  },
  ".sl-markdown-content table a svg": {
    display: "inline-block",
  },

  ".sl-markdown-content .inline-block": {
    display: "inline-block",
  },
  ".sl-markdown-content img.inline-block": {
    display: "inline-block",
    "vertical-align": "baseline",
    "margin-right": "1rem",
    "margin-bottom": "1.25rem",
  },

  ".sl-markdown-content ul > li ul": {
    "margin-top": 0,
  },

  input: {
    "background-color": "var(--sl-color-gray-6)",
    "font-weight": "normal",
  },
};

module.exports = plugin(
  function ({ addBase, config }) {
    addBase(starlightStyles);
  },
  {
    content: [
      "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
      "./**/@concept10/starlight/components/*.{astro,tsx}",
    ],
    theme: {
      extend: {
        colors: { accent, gray },
      },
      fontFamily: {
        sans: ['"Roboto"'],
        mono: ['"Roboto Mono"'],
      },
    },
  },
);

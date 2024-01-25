module.exports = {
  plugins: ["prettier-plugin-astro"],
  printWidth: 100,
  semi: true,
  singleQuote: true,
  trailingComma: "all",
  useTabs: true,
  overrides: [
    {
      files: ["*.json", "*.md", "*.mdx", "*.yml", "*.yaml", "*.css"],
      options: {
        useTabs: false,
      },
    },
    {
      files: ["*.astro"],
      options: {
        parser: "astro",
      },
    },
  ],
};

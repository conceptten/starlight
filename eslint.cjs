module.exports = {
  extends: ["plugin:astro/recommended", "prettier"],
  ignorePatterns: ["node_modules", "dist"],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
      rules: {},
    },
  ],
};

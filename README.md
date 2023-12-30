# CONCEPT10 Starlight docs theme

This repository contains the common files for
[CONCEPT10](https://www.concept10.be) documentation and as built sites.

It provides a [starlight](https://starlight.astro.build/) theme (using
[tailwind](https://tailwindcss.com/)),
[eslint](https://eslint.style/) config and [prettier](https://prettier.io/)
config.

## Setup

A starter template can be found at
[conceptten/starlight-template](https://github.com/conceptten/starlight-template).
To get started quickly, run

```shell
npx degit conceptten/starlight-template ./my-project-name
cd my-project-name
git init
```

Or, to add it to an existing project, follow these steps:

First, create a new [starlight](https://starlight.astro.build/) project and
install the additional dependencies

```shell
pnpm create astro --template starlight
cd <project>
pnpm install \
  @astrojs/solid-js \
  @astrojs/starlight-tailwind
pnpm install -D \
  @astrojs/tailwind \
  eslint \
  eslint-config-prettier \
  eslint-plugin-astro \
  eslint-plugin-jsx-a11y \
  prettier \
  prettier-plugin-astro \
  tailwindcss \
```

Choose a name and install the dependencies when asked.
We also recommend using `TypeScript` in `Strict` mode.

Add the `@concept10/starlight` package to `package.json`

```json
{
  "dependencies": {
    "@concept10/starlight": "git+https://github.com/conceptten/starlight.git#v1.0.2"
  }
}
```

and install the dependencies

```shell
pnpm install --shamefully-hoist
```

Edit the `astro.config.mjs` and add the following:

```js
import concept10 from "@concept10/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        concept10({
          trackingId: "xxx-yyy-zzz",
        }),
      ],
    }),
  ],
});
```

In `package.json` add

```json
{
  "scripts": {
    "lint": "prettier --check . '!**/*.mdx' && eslint",
    "format": "prettier --write ."
  },
  "eslintConfig": {
    "extends": [
      "@concept10/starlight/eslint",
      "plugin:astro/recommended",
      "prettier"
    ]
  },
  "prettier": "@concept10/starlight/prettier"
}
```

In `tsconfig.json` add

```json
{
  "compilerOptions": {
    "jsxImportSource": "solid-js",
    "jsx": "preserve"
  }
}
```

Create a `tailwind.config.cjs` with the following contents

```js
const starlightPlugin = require("@astrojs/starlight-tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [starlightPlugin(), require("@concept10/starlight/tailwind")],
};
```

and a `src/styles/tailwind.css` containing

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

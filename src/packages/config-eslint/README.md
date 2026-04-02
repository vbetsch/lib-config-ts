# @vbetsch/config-eslint

A modular and extensible ESLint configuration collection for TypeScript projects, designed to enforce high code quality
standards while remaining flexible.

## 🧩 Modules

This package provides several configuration modules that can be composed to fit your project's needs:

| Module                             | Description                                          |
|------------------------------------|------------------------------------------------------|
| [`base`](src/base.mjs)             | Core TypeScript rules and best practices.            |
| [`jsx`](src/jsx.mjs)               | Specialized rules for React and JSX accessibility.   |
| [`naming`](src/naming.mjs)         | Enforces strict and consistent naming conventions.   |
| [`prettier`](src/prettier.mjs)     | Disables conflicting rules and integrates Prettier.  |
| [`spellcheck`](src/spellcheck.mjs) | Checks for common typos in identifiers and comments. |
| [`strict`](src/strict.mjs)         | Opinionated rules for maximum type safety and rigor. |

## 🏗️ Installation

Install the package and its required peer dependencies in your project:

```bash
npm install -D @vbetsch/config-eslint eslint typescript-eslint
```

> **Note**: Depending on the modules you use (e.g., jsx or prettier), you must also install the corresponding peer
> dependencies like eslint-plugin-react or prettier.

## 🚀 Getting started

To use these configurations, import them into your flat `eslint.config.js` file:

```js
import baseConfig from "@vbetsch/config-eslint/base";
import jsxConfig from "@vbetsch/config-eslint/jsx";
import prettierConfig from "@vbetsch/config-eslint/prettier";

export default [
  ...baseConfig,
  ...jsxConfig,
  ...prettierConfig,
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // Your custom overrides here
    }
  }
];
```

## 🤝 Contributing

Please refer to the [Root README](https://github.com/vbetsch/lib-config-ts/blob/master/README.md) for contribution
guidelines.

[© 2026 vbetsch — MIT License](LICENSE)

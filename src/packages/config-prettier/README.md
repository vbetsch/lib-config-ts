# @vbetsch/config-prettier

A standardized Prettier configuration for TypeScript projects, ensuring consistent code style and readability across
your entire codebase.

## 🧩 Modules

This package provides several configuration modules that can be composed to fit your project's needs:

| Module                 | Description                                                          |
|------------------------|----------------------------------------------------------------------|
| [`base`](src/base.mjs) | Core Prettier rules (single quotes, 100-character line width, etc.). |

## 🏗️ Installation

Install the NPM package in your project:

```bash
npm install -D @vbetsch/config-prettier
```

## 🚀 Getting started

To use these configurations, import them into your flat `.prettierrc.mjs` file:

```js
import base from '@vbetsch/config-prettier';

export default {
  ...base,
};
```

## 🤝 Contributing

Please refer to the [Root README](https://github.com/vbetsch/lib-config-ts/blob/master/README.md) for contribution
guidelines.

[© 2026 vbetsch — MIT License](LICENSE)

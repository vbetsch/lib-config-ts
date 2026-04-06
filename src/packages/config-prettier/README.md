# @vbetsch/config-prettier

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![github: repo](https://img.shields.io/badge/github-repo-blue?logo=github)](https://github.com/vbetsch/lib-config-ts)

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
// NOTE: You can name imports like you want
import baseVbetsch from '@vbetsch/config-prettier';

export default {
  ...baseVbetsch,
};
```

> Check out the [vbetsch/lib-config-ts-test](https://github.com/vbetsch/lib-config-ts-test) repository for a live
> integration example.

## 🤝 Contributing

Please refer to the [Root README](https://github.com/vbetsch/lib-config-ts/blob/master/README.md) for contribution
guidelines.

[© 2026 vbetsch — MIT License](LICENSE)

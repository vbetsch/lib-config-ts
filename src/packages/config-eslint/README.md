# @vbetsch/config-eslint

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![github: repo](https://img.shields.io/badge/github-repo-blue?logo=github)](https://github.com/vbetsch/lib-config-ts)
[![npm package version](https://img.shields.io/npm/v/@vbetsch/config-eslint)](https://www.npmjs.com/package/@vbetsch/config-eslint)
[![npm downloads number per week](https://img.shields.io/npm/dw/@vbetsch/config-eslint)](https://www.npmjs.com/package/@vbetsch/config-eslint)
[![npm package install size](https://packagephobia.com/badge?p=@vbetsch/config-eslint)](https://www.npmjs.com/package/@vbetsch/config-eslint)

A modular and extensible ESLint configuration collection for TypeScript projects, designed to enforce high code quality
standards while remaining flexible.

## 🧩 Modules

This package provides several configuration modules that can be composed to fit your project's needs:

| Module                                                                                                             | Description                                          |
|--------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| [`base`](https://github.com/vbetsch/lib-config-ts/blob/master/src/packages/config-eslint/src/base.mjs)             | Core TypeScript rules and best practices.            |
| [`jsx`](https://github.com/vbetsch/lib-config-ts/blob/master/src/packages/config-eslint/src/jsx.mjs)               | Specialized rules for React and JSX accessibility.   |
| [`naming`](https://github.com/vbetsch/lib-config-ts/blob/master/src/packages/config-eslint/src/naming.mjs)         | Enforces strict and consistent naming conventions.   |
| [`prettier`](https://github.com/vbetsch/lib-config-ts/blob/master/src/packages/config-eslint/src/prettier.mjs)     | Disables conflicting rules and integrates Prettier.  |
| [`spellcheck`](https://github.com/vbetsch/lib-config-ts/blob/master/src/packages/config-eslint/src/spellcheck.mjs) | Checks for common typos in identifiers and comments. |
| [`strict`](https://github.com/vbetsch/lib-config-ts/blob/master/src/packages/config-eslint/src/strict.mjs)         | Opinionated rules for maximum type safety and rigor. |

## 🏗️ Installation

We recommend using Node version [lts/krypton -> v24.14.1](https://nodejs.org/en/blog/release/v24.14.1).

Install the NPM package in your project:

```bash
npm install -D @vbetsch/config-eslint
```

> **Note**: Depending on the modules you use (e.g., jsx or prettier), you must also install the corresponding peer
> dependencies like eslint-plugin-react or prettier.

* **base**:
    * _No more dependencies needed_
* **jsx**:
    * tsconfig module jsx
    * **react**
    * **eslint-plugin-react**
    * **eslint-plugin-jsx-a11y**
* **naming**:
    * _No more dependencies needed_
* **prettier**:
    * **eslint-config-prettier**
    * **eslint-plugin-prettier**
* **spellcheck**:
    * **eslint-plugin-spellcheck**
* **strict**:
    * **eslint-plugin-import**

## 🚀 Getting started

To use these configurations, import them into your flat `eslint.config.mjs` file:

```js
// NOTE: You can name imports like you want
import baseVbetsch from '@vbetsch/config-eslint/base';
import prettierVbetsch from '@vbetsch/config-eslint/prettier';
import strictVbetsch from '@vbetsch/config-eslint/strict';

export default [
  ...baseVbetsch,
  ...strictVbetsch,
  ...prettierVbetsch,

  // IMPORTANT: You have to add these lines only for the strict module !
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];

```

> Check out the [vbetsch/lib-config-ts-test](https://github.com/vbetsch/lib-config-ts-test) repository for a live
> integration example.

## 🤝 Contributing

Please refer to the [Root README](https://github.com/vbetsch/lib-config-ts/blob/master/README.md) for contribution
guidelines.

[© 2026 vbetsch — MIT License](https://github.com/vbetsch/lib-config-ts/blob/master/src/packages/config-eslint/LICENSE)

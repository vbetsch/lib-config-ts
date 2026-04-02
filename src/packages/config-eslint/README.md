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
    * _No more dependencies needed_
* **spellcheck**:
    * **eslint-plugin-spellcheck**
* **strict**:
    * **eslint-plugin-import**

## 🚀 Getting started

To use these configurations, import them into your flat `eslint.config.mjs` file:

```js
import tseslint from 'typescript-eslint';
import base from '@vbetsch/config-eslint';
import prettier from '@vbetsch/config-eslint';
import strict from '@vbetsch/config-eslint';

export default tseslint.config(
  ...base,
  ...strict,
  ...prettier,
);

```

> Check out the [vbetsch/lib-config-ts-test](https://github.com/vbetsch/lib-config-ts-test) repository for a live
> integration example.

## 🤝 Contributing

Please refer to the [Root README](https://github.com/vbetsch/lib-config-ts/blob/master/README.md) for contribution
guidelines.

[© 2026 vbetsch — MIT License](LICENSE)

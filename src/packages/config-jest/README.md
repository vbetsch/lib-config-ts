# @vbetsch/config-jest

A modular Jest configuration collection for TypeScript projects, optimized for speed and reliability using modern
transformers like SWC.

## 🧩 Modules

This package provides several configuration modules that can be composed to fit your project's needs:

| Module                     | Description                                                            |
|----------------------------|------------------------------------------------------------------------|
| [`base`](src/base.mjs)     | Core Jest configuration for Node.js and TypeScript.                    |
| [`dom`](src/dom.mjs)       | Specialized configuration for browser-like environments (JSDOM).       |
| [`strict`](src/strict.mjs) | Opinionated high-performance setup using SWC and strict type checking. |

## 🏗️ Installation

Install the NPM package in your project:

```bash
npm install -D @vbetsch/config-jest
```

> **Note**: Depending on the modules you use (e.g., dom or strict), you must also install the corresponding peer
> dependencies like jest-environment-jsdom, @swc/core, or @swc/jest.

## 🚀 Getting started

To use these configurations, import them into your flat `jest.config.mjs` file:

```js
import base from '@vbetsch/config-jest';
import strict from '@vbetsch/config-jest';

export default {
  ...base,
  ...strict,
};
```

## 🤝 Contributing

Please refer to the [Root README](https://github.com/vbetsch/lib-config-ts/blob/master/README.md) for contribution
guidelines.

[© 2026 vbetsch — MIT License](LICENSE)

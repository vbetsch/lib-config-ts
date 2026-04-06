# @vbetsch/config-jest

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![github: repo](https://img.shields.io/badge/github-repo-blue?logo=github)](https://github.com/vbetsch/lib-config-ts)

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

You have to install **@types/jest** if you want to write Jest tests in TypeScript.

> **Note**: Depending on the modules you use (e.g., dom or strict), you must also install the corresponding peer
> dependencies like jest-environment-jsdom or @swc/jest.

* **base**:
    * _No more dependencies needed_
* **dom**:
    * **jest-environment-jsdom**
* **strict**:
    * **@swc/jest**

* **base**:
    * _No more dependencies needed_
* **dom**:
    * **jest-environment-jsdom**
* **strict**:
    * **@swc/jest**
    * @swc/core ?

## 🚀 Getting started

To use these configurations, import them into your flat `jest.config.mjs` file:

```js
// NOTE: You can name imports like you want
import baseVbetsch from '@vbetsch/config-jest/base';
import strictVbetsch from '@vbetsch/config-jest/strict';

export default {
  ...baseVbetsch,
  ...strictVbetsch,
};
```

> Check out the [vbetsch/lib-config-ts-test](https://github.com/vbetsch/lib-config-ts-test) repository for a live
> integration example.

## 🤝 Contributing

Please refer to the [Root README](https://github.com/vbetsch/lib-config-ts/blob/master/README.md) for contribution
guidelines.

[© 2026 vbetsch — MIT License](LICENSE)

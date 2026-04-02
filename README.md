# lib-config-ts

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This repository is a monorepo powered by [NPM Workspaces](https://docs.npmjs.com/cli/using-npm/workspaces). It allows
you to install only the specific configuration blocks you need, eliminating unnecessary dependency overhead in your
projects.

## 🧩 Structure

### Packages

| Package                        | Description               | Path                                                         |
|--------------------------------|---------------------------|--------------------------------------------------------------|
| [`@vbetsch/config-eslint`]()   | Core ESLint configuration | [src/packages/config-eslint](src/packages/config-eslint)     |
| [`@vbetsch/config-jest`]()     | Testing configuration     | [src/packages/config-jest](src/packages/config-jest)         |
| [`@vbetsch/config-prettier`]() | Formatting standards      | [src/packages/config-prettier](src/packages/config-prettier) |
| [`@vbetsch/config-tsconfig`]() | Compiler settings         | [src/packages/config-tsconfig](src/packages/config-tsconfig) |

### Templates

The [templates](src/templates) folder provides ready-to-use configuration boilerplates for a quick project setup.

## 🏗️ Installation

Refer to the individual module READMEs for specific installation instructions.

```bash
# Example
npm install -D @vbetsch/config-eslint @vbetsch/config-tsconfig
```

## 🚀 Using

Check out the [vbetsch/lib-config-ts-test](https://github.com/vbetsch/lib-config-ts-test) repository for a live
integration example.

## 🤝 Contributing

Contributions are welcome! To get started, please ensure you have an approved issue before submitting a PR.

[© 2026 vbetsch — MIT License](LICENSE)

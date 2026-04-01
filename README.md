# lib-config-ts

This repository is a monorepo powered by [NPM Workspaces](https://docs.npmjs.com/cli/using-npm/workspaces). It allows
you to install only the specific configuration blocks you need, preventing "dependency bloat" in your projects.

## 🧩 Structure

### Packages

| Package                        | Description               | Path                                                         |
|--------------------------------|---------------------------|--------------------------------------------------------------|
| [`@vbetsch/config-eslint`]()   | Core ESLint configuration | [src/packages/config-eslint](src/packages/config-eslint)     |
| [`@vbetsch/config-jest`]()     | Testing configuration     | [src/packages/config-jest](src/packages/config-jest)         |
| [`@vbetsch/config-prettier`]() | Formatting standards      | [src/packages/config-prettier](src/packages/config-prettier) |
| [`@vbetsch/config-tsconfig`]() | Compiler settings         | [src/packages/config-tsconfig](src/packages/config-tsconfig) |

### Templates

The [templates](src/templates) folder offers you multiple configurations files ready to copy paste in your projects.

## 🏗️ Installation

Please refer to installation guides on each modules.

```bash
# Example
npm install -D @vbetsch/config-eslint @vbetsch/config-tsconfig
```

## 🚀 Using

You have an example to how to use librairies into the
repository [vbetsch/lib-config-ts-test](https://github.com/vbetsch/lib-config-ts-test).

## 🤝 Contributing

I welcome anyone who wants to participate in improving the project !<br>
You just need an approved issue.

[© 2026 vbetsch — MIT License](LICENSE)

# @vbetsch/config-tsconfig

A collection of modular and extensible TSConfig files for TypeScript projects, providing a solid foundation for
development and production builds.

## 🧩 Modules

This package provides several configuration modules that can be composed to fit your project's needs:

| Module                              | Description                                             |
|-------------------------------------|---------------------------------------------------------|
| [`base`](src/base.json)             | Core TypeScript configuration for modern environments.  |
| [`jsx`](src/jsx.json)               | Specialized settings for React and JSX projects.        |
| [`strict`](src/strict.json)         | Opinionated settings for maximum type safety and rigor. |
| [`build/base`](src/build/base.json) | Base configuration dedicated to the build process.      |
| [`build/lib`](src/build/lib.json)   | Optimized settings for building TypeScript libraries.   |

## 🏗️ Installation

Install the NPM package in your project:

```bash
npm install -D @vbetsch/config-tsconfig
```

## 🚀 Getting started

To use these configurations, extend them in your `tsconfig.json` file:

```json
{
    "extends": [
        "@vbetsch/lib-config-ts/tsconfig/base",
        "@vbetsch/lib-config-ts/tsconfig/strict"
    ]
}
```

### Using Build configurations

For your production builds, you can create a `tsconfig.build.json` and extend the build-specific modules:

```json
{
    "extends": [
        "./tsconfig.json",
        "@vbetsch/lib-config-ts/tsconfig/build/base",
        "@vbetsch/lib-config-ts/tsconfig/build/lib"
    ],
    "compilerOptions": {
        // IMPORTANT: You have to define it !
        "outDir": "./dist/"
    }
}
```

> Check out the [vbetsch/lib-config-ts-test](https://github.com/vbetsch/lib-config-ts-test) repository for a live
> integration example.

## 🤝 Contributing

Please refer to the [Root README](https://github.com/vbetsch/lib-config-ts/blob/master/README.md) for contribution
guidelines.

[© 2026 vbetsch — MIT License](LICENSE)

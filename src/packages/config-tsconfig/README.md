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

> **Note**: Depending on the modules you use (e.g. jsx), you must also install the corresponding peer
> dependencies like @types/react.

* **base**:
    * _No more dependencies needed_
* **jsx**:
    * **@types/react**
* **strict**:
    * _No more dependencies needed_
* **build/base**:
    * _No more dependencies needed_
* **build/lib**:
    * _No more dependencies needed_

## 🚀 Getting started

To use these configurations, extend them in your `tsconfig.json` file:

```json
{
    "extends": [
        "@vbetsch/config-tsconfig/base",
        "@vbetsch/config-tsconfig/strict"
    ]
}
```

### Using Build configurations

For your production builds, you can create a `tsconfig.build.json` and extend the build-specific modules.
You have to define **outDir** in your `tsconfig.build.json`.
If you modify your tsconfig build file after build your application in local, you have to think to delete your out
directory if exist.

```json
{
    "extends": [
        "./tsconfig.json",
        "@vbetsch/config-tsconfig/build/base",
        "@vbetsch/config-tsconfig/build/lib"
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

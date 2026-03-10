# TypeScript Configuration Rules Documentation

* `allowSyntheticDefaultImports`: Permits importing default exports from modules that do not explicitly define one, improving consistency.
* `declaration`: Generates a .d.ts declaration file for each TypeScript file, essential for library consumers.
* `declarationMap`: Creates source maps for declaration files, allowing IDEs to navigate from your library's types back to your source code.
* `emitDecoratorMetadata`: Generates metadata for decorated declarations, enabling frameworks to reflect on types at runtime.
* `esModuleInterop`: Simplifies the import of CommonJS modules by creating synthetic namespaces, enabling default imports for non-ESM libraries.
* `exactOptionalPropertyTypes`: Prevents explicitly setting optional properties to undefined, ensuring strict object structures.
* `experimentalDecorators`: Enables support for standard TypeScript decorators (e.g., for NestJS or TypeORM).
* `forceConsistentCasingInFileNames`: Ensures that import statements match the file system's case sensitivity, preventing cross-platform bugs.
* `incremental`: Enables incremental compilation by saving build info to disk, speeding up subsequent builds.
* `isolatedModules`: Ensures each file can be safely transpiled independently, which is required by most modern build
  tools.
* `jsx`: Controls how JSX code is transformed into JavaScript (e.g., _react-jsx_ for modern React).
* `jsxFactory`: Specifies the function to use when targeting JSX transforms (e.g., _h_ for Preact).
* `jsxFragmentFactory`: Defines the function to use for fragments (`<>...</>`) in JSX.
* `jsxImportSource`: Determines the package/runtime used for JSX transforms (e.g., _react_ or _@emotion/react_).
* `module`: Specifies the module system to be used for the generated code (e.g., ESNext for standard import/export).
* `moduleResolution`: Tells the compiler how to resolve module paths, with bundler optimized for modern tools like _Vite_ or _Webpack_.
* `noEmit`: When set to false, it instructs the compiler to generate output files (JS/types); set to true when using external bundlers that handle transpilation.
* `noFallthroughCasesInSwitch`: Prevents accidental control flow fallthrough in switch statements by requiring explicit break or return statements.
* `noImplicitAny`: Prevents the compiler from inferring the any type, forcing you to define types explicitly.
* `noImplicitOverride`: Forces the use of the override keyword when overriding methods in class inheritance.
* `noImplicitReturns`: Ensures that every code path in a function that is expected to return a value explicitly does so.
* `noPropertyAccessFromIndexSignature`: Forces the use of bracket notation (`obj["key"]`) for properties not explicitly defined in the interface.
* `noUncheckedIndexedAccess`: Forces undefined to be part of the return type when accessing arrays or objects via index.
* `noUnusedLocals`: Reports errors for local variables that are declared but never used in the function body.
* `noUnusedParameters`: Reports errors for function parameters that are declared but never used.
* `removeComments`: Strips all comments from the generated JavaScript files to reduce file size.
* `resolveJsonModule`: Allows the compiler to import and type-check .json files directly as modules.
* `skipLibCheck`: Skips type checking of declaration files in _node_modules_ to significantly improve compilation speed.
* `sourceMap`: Generates .map files that link the compiled JavaScript back to the original TypeScript source for easier debugging.
* `strict`: The master switch that enables a comprehensive set of strict type-checking rules for improved code safety.
* `strictPropertyInitialization`: Ensures that all class properties are explicitly initialized in the constructor.
* `target`: Defines the JavaScript language version for the emitted code (e.g., ESNext for modern features).
* `useUnknownInCatchVariables`: Forces variables in catch blocks to be typed as unknown instead of any, requiring explicit type narrowing.
* `verbatimModuleSyntax`: Forces the use of explicit import type for type-only imports, ensuring cleaner and more
  predictable build outputs.

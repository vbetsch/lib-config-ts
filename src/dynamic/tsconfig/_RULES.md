# TypeScript Configuration Rules Documentation

* `target`: Defines the JavaScript language version for the emitted code (e.g., ESNext for modern features).
* `module`: Specifies the module system to be used for the generated code (e.g., ESNext for standard import/export).
* `moduleResolution`: Tells the compiler how to resolve module paths, with bundler optimized for modern tools like _Vite_
  or
  _Webpack_.
* `forceConsistentCasingInFileNames`: Ensures that import statements match the file system's case sensitivity,
  preventing
  cross-platform bugs.
* `skipLibCheck`: Skips type checking of declaration files in **node_modules** to significantly improve compilation speed.
* `isolatedModules`: Ensures each file can be safely transpiled independently, which is required by most modern build
  tools.
* `resolveJsonModule`: Allows the compiler to import and type-check .json files directly as modules.
* `esModuleInterop`: Simplifies the import of CommonJS modules by creating synthetic namespaces, enabling default
  imports
  for non-ESM libraries.
* `allowSyntheticDefaultImports`: Permits importing default exports from modules that do not explicitly define one,
  improving consistency.
* `incremental`: Enables incremental compilation by saving build info to disk, speeding up subsequent builds.
* `strict`: The master switch that enables a comprehensive set of strict type-checking rules for improved code safety.
* `noImplicitAny`: Prevents the compiler from inferring the any type, forcing you to define types explicitly.
* `noUnusedLocals`: Reports errors for local variables that are declared but never used in the function body.
* `noUnusedParameters`: Reports errors for function parameters that are declared but never used.
* `noFallthroughCasesInSwitch`: Prevents accidental control flow fallthrough in switch statements by requiring explicit
  break or return statements.
* `verbatimModuleSyntax`: Forces the use of explicit import type for type-only imports, ensuring cleaner and more
  predictable build outputs.
* `noImplicitReturns`: Ensures that every code path in a function that is expected to return a value explicitly does so.
* `noEmit`: When set to false, it instructs the compiler to generate output files (JS/types); set to true when using
  external bundlers that handle transpilation.
* `removeComments`: Strips all comments from the generated JavaScript files to reduce file size.
* `sourceMap`: Generates .map files that link the compiled JavaScript back to the original TypeScript source for easier
  debugging.
* `declaration`: Generates a .d.ts declaration file for each TypeScript file, essential for library consumers.
* `declarationMap`: Creates source maps for declaration files, allowing IDEs to navigate from your library's types back
  to
  your source code.

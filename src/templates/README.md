# templates

This folder contains standardized boilerplate configurations to ensure environment consistency
across your projects.

| File                                 | Purpose                                                           |
|:-------------------------------------|:------------------------------------------------------------------|
| [`.editorconfig`](.editorconfig)     | Enforces IDE formatting settings (2 spaces, LF, trim whitespace). |
| [`.gitignore`](.gitignore)           | Standard exclusion list for TS/Node.js projects.                  |
| [`.npmrc`](.npmrc)                   | Ensures strict engine checks and lockfile consistency.            |
| [`.prettierignore`](.prettierignore) | Prevents Prettier from processing build artifacts.                |

## Getting started

Copy the desired configuration files to your project's root directory.

> **Note:** These are "hidden" files (starting with a dot). Ensure your file explorer or terminal
> shows hidden files before copying.

```bash
# Example: Copying from a local clone
git clone https://github.com/vbetsch/lib-config-ts
cp lib-config-ts/src/templates/.editorconfig /path/to/your/project/
```

## Contributing

Please refer to the [Root README](../../README.md) for contribution guidelines.

[© 2026 vbetsch — MIT License](../../LICENSE)

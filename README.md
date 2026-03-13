# lib-config-ts

## Installation

```bash
eval `ssh-agent -s`
ssh-add ~/.ssh/id_ed25519
npm install github:vbetsch/lib-config-ts
```

```bash
git clone https://github.com/vbetsch/lib-config-ts
cp ./lib-config-ts/src/static/* PATH_OF_YOUR_REPOSITORY
```

## Files

### Native inheritance

- [x] eslint.config.mjs
- [x] .prettierrc
- [x] tsconfig.json
- [x] tsconfig.build.json
- [x] jest.config.cjs
- [x] package.json

### Static

- [ ] .editorconfig
- [ ] .npmrc
- [ ] .prettierignore

## Using

[vbetsch/lib-config-ts-test](https://github.com/vbetsch/lib-config-ts-test)

## Modules

### eslint

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

### prettier

* **base**:
    * _No more dependencies needed_

### tsconfig

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
    * You have to delete your out directory if exist

### jest

You have to install **@types/jest** if you want to write Jest tests.

* **base**:
    * _No more dependencies needed_
* **dom**:
    * **jest-environment-jsdom**
* **strict**:
    * ...

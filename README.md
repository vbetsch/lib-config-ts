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

## Requirements

### dependencies

* You just need your runner (tsx for example).
* You have to install **@types/jest** if you want to write Jest tests.

## Extra modules

### tsconfig

1. **strict**:
    * _No more dependencies needed_
2. **jsx**:
    * **@types/react**
3. **build/lib**:
    * _No more dependencies needed_
    * You have to delete your out directory if exist

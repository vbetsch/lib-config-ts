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

- [ ] eslint.config.mjs
- [ ] .prettierrc
- [ ] tsconfig.json
- [ ] tsconfig.build.json
- [ ] jest.config.cjs
- [ ] package.json

### Static

- [ ] .editorconfig
- [ ] .npmrc
- [ ] .prettierignore

## Using
[vbetsch/lib-config-ts-test](https://github.com/vbetsch/lib-config-ts-test)

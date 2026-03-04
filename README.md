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

- [ ] eslint.config.mjs => ready
- [ ] .prettierrc => ready
- [ ] tsconfig.json => ready
- [ ] tsconfig.build.json => ready
- [ ] jest.config.cjs => ready
- [ ] package.json => ready

### Static

- [ ] .editorconfig
- [ ] .npmrc
- [ ] .prettierignore

## Using
[vbetsch/lib-config-ts-test](https://github.com/vbetsch/lib-config-ts-test)

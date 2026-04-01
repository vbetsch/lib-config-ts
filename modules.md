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

You have to define **outDir** in your `tsconfig.build.json`.
If you modify your tsconfig build file after build your application in local, you have to think to delete your out directory if exist.

```json
{
    ...
    "compilerOptions": {
        "outDir": "./dist/"
    },
    ...
}
```

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

### jest

You have to install **@types/jest** if you want to write Jest tests.

* **base**:
    * _No more dependencies needed_
* **dom**:
    * **jest-environment-jsdom**
* **strict**:
    * **@swc/jest**
    * @swc/core ?

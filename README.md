# oh-my-glob

![](./assets/oh-my-glob.gif)

Directory tree filtering with multiple globs

```shell
npm install oh-my-glob
```

```javascript
const filter = require("oh-my-glob");

filter(process.cwd(), ["**/*.ts", "!node_modules", "!**/*.test.ts"])
```

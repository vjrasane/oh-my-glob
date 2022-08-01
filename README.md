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

## API

<a name="filter"></a>

### `filter(directory, patterns)` ⇒ <code>Array&lt;string&gt;</code>
Filters files in the directory tree starting from given root directory based on given glob patterns.

**Returns**: <code>Array&lt;string&gt;</code> - array of matching file names relative to the root directory

| Param | Type | Description |
| --- | --- | --- |
| directory | <code>string</code> | root of the directory tree for the filtering |
| patterns | <code>Array&lt;string&gt;</code> | array of glob patterns to be matched against |
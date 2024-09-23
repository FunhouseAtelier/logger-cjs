# @funhouse-atelier/logger-cjs

## Requirements

- Node.js >=16.0.0

## Usage

### Installing

1. Enter the terminal command to install the `logger-cjs` package from NPM.

```bash
npm i @funhouse-atelier/logger-cjs
```

### Instantiating

1. Require the `logger-cjs` package in a JavaScript file.

```js
const logger = require("logger-cjs");
```

2. Instantiate the logger.

```js
const log = await logger({ name: "@test.js", level: 0 });
```

#### Notes

Note that `logger()` returns a promise, because it relies on dynamic imports for CommonJs compatibility, so you must use `await` inside an `async` function.

The options object passed to `logger()` is not required, but is included here for demonstration.

The `name` option is not required. If `name` is included `logger()` will return a logger instance with that particular name, and that name will be included in all logs created with that instance. If `name` is not included a global logger instance will be returned, and "root" will be used as the name.

The `level` option is not required. If `level` is included it will set the suppression level of that logger instance, where `0` means "show all log messages" and `5` means "silent". If `level` is not included the default level of `3` will be used the first time the logger is instantiated.

### Logging to Console

A list of all log output methods available on an instance of `logger`, starting with the maximum suppression level for them to be output:

- 0: `log.trace(message)`
- 1: `log.debug(message)`
- 2: `log.info(message)`
- 3: `log.warn(message)`
- 4: `log.error(message)`

## Dependencies

- [loglevel](https://www.npmjs.com/package/loglevel)
- [loglevel-plugin-prefix](https://www.npmjs.com/package/loglevel-plugin-prefix)
- [chalk](https://www.npmjs.com/package/chalk)

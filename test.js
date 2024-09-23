(async () => {
  const logger = require("./index.js");

  const log = await logger({ name: "@test.js", level: 0 });

  log.trace("testing log.trace()");
  log.debug("testing log.debug()");
  log.info("testing log.info()");
  log.warn("testing log.warn()");
  log.error("testing log.error()");
})().catch((error) => console.log(error));

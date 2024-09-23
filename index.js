module.exports = async (options) => {
  const { name, level } = typeof options === "object" ? options : {};
  try {
    const prefixImportPromise = import("loglevel-plugin-prefix");
    const loglevelImportPromise = import("loglevel");
    const chalkImportPromise = import("chalk");

    const [prefixImport, loglevelImport, chalkImport] = await Promise.all([
      prefixImportPromise,
      loglevelImportPromise,
      chalkImportPromise,
    ]).then((imports) => imports);

    const prefix = prefixImport.default;
    const loglevel = loglevelImport.default;
    const chalk = chalkImport.default;

    const colors = {
      TRACE: chalk.magenta,
      DEBUG: chalk.cyan,
      INFO: chalk.blue,
      WARN: chalk.yellow,
      ERROR: chalk.red,
    };

    prefix.reg(loglevel);
    prefix.apply(loglevel, {
      timestampFormatter(date) {
        return date.toISOString();
      },
      format(level, name, timestamp) {
        return `${chalk.gray(`[${timestamp}]`)} ${colors[level](level)}${
          ["INFO", "WARN"].includes(level) ? " " : ""
        } ${chalk.green(`${name}\n`)}`;
      },
    });

    const log = name ? loglevel.getLogger(name) : loglevel;
    if (level || level === 0) log.setLevel(level);

    return log;
  } catch (error) {
    throw new Error(`logger-cjs failed to initialize\n${error}`);
  }
};

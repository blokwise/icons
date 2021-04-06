import { join } from "path";
import consola from "consola";

export default async function iconsModule({
  prefix = "icon",
  pathPrefix = false,
  withConsole = false,
} = {}) {
  const logger = consola.withScope("@blokwise/icons");

  this.nuxt.hook("components:dirs", (dirs) => {
    dirs.push({
      path: join(__dirname, "components"),
      pattern: "**/*.vue",
      pathPrefix,
      prefix,
    });
  });

  if (withConsole) {
    logger.success({
      message: "blokwise icons ready",
      additional: `Module @blokwise/icons successfully registered.\nA bunch of amazing icons at your fingertips`,
      badge: true,
    });
  }

  return true;
}

module.exports.meta = require("./../package.json");

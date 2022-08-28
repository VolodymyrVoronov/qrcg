const { build } = require("esbuild");
const options = require("./esbuild-config.js");

build(options).catch((err) => {
  process.stderr.write(err.stderr);
  process.exit(1);
});

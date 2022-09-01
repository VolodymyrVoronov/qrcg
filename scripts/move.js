const fse = require("fs-extra");

const srcDir = "public";
const destDir = "docs";

try {
  fse.copySync(srcDir, destDir, { overwrite: true | false });
  console.log("success!");
} catch (err) {
  console.error(err);
}

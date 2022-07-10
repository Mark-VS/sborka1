const del = require("del");
async function cleanCss(cb) {
    await del([
        "./build/styles/**/*"
    ]);
    cb();
}
module.exports = cleanCss;
const del = require("del");
async function cleanScripts(cb) {
    await del([
        "./build/scripts/*.js"
    ]);
    cb();
}
module.exports = cleanScripts;
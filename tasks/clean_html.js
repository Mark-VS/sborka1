const del = require("del");
async function cleanViews(cb) {
    await del([
        "./build/*.html"
    ]);
    cb();
}
module.exports = cleanViews;
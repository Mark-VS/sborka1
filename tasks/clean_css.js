const { src, dest } = require("gulp");
const clean = require("gulp-clean");
function cleanCss(cb) {
    return src("./build/styles/**/*", {read: false})
        .pipe(clean());
    cb();
}
module.exports = cleanCss;
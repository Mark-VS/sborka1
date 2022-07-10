const { src } = require("gulp");
const clean = require("gulp-clean");
function cleanViews(cb) {
    return src("./build/*.html", {read: false})
        .pipe(clean());
    cb();
}
module.exports = cleanViews;
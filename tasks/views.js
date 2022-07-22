const gulp = require("gulp");
const pug = require("gulp-pug");

function views(cb) {
    return gulp.src("./src/views/*.pug")
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest("./build"));
    cb();
}
module.exports = views;
const gulp = require("gulp");
const pug = require("gulp-pug");

function views(cb) {
    // Конвертируем все pug-файлы во всех вложенных папках, кроме папки layouts,
    // потому что там хранятся не полноценные странички, а layout'ы.
    return gulp.src(["./src/views/**/*.pug", "!./src/views/layouts/**/*.pug"])
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest("./build"));
    cb();
}
module.exports = views;
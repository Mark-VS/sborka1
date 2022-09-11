const gulp = require("gulp");
const postCss = require("gulp-postcss");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const srmaps = require("gulp-sourcemaps");
const newer = require("gulp-newer");
// Копируем nozrmalize.css в директорию
// Эта ф-ция вынесена отдельно для того, чтобы каждый раз ...
// ... не пересобирать normalize.css заново. За этим следит плагин gulp-newer.
function norm() {
    var processors = [cssnano()];
    return gulp.src("./node_modules/normalize.css/normalize.css")
        .pipe(newer("./build/styles"))
        .pipe(postCss(processors))
        .pipe(gulp.dest("./build/styles"));
}
// Собираем стили

// Эта функция собирает стили из "src/styles"
function compileStyles() {
    var plugins = [
        autoprefixer({overrideBrowserslist: ["last 1 version"]}),
        cssnano()
    ];
    norm();
    return gulp.src("./src/styles/main.scss")
        .pipe(srmaps.init())
            .pipe(sass().on("error", sass.logError))
            .pipe(postCss(plugins))
        .pipe(srmaps.write("./sourcemaps"))
        .pipe(gulp.dest("./build/styles"));
}

// Эта функция собирает стили из "src/styles/bootstrap-navbar"
function compileStylesNavbar() {
    var plugins = [
        autoprefixer({overrideBrowserslist: ["last 1 version"]}),
        cssnano()
    ];
    norm();
    return gulp.src("./src/styles/bootstrap-navbar/main.scss")
        //.pipe(srmaps.init())
            .pipe(sass().on("error", sass.logError))
            .pipe(postCss(plugins))
        //.pipe(srmaps.write("./sourcemaps"))
        .pipe(gulp.dest("./build/bootstrap/styles"));
}
module.exports = compileStyles;
//module.exports = compileStylesNavbar;
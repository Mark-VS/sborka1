const gulp = require("gulp");
const postCss = require("gulp-postcss");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const srmaps = require("gulp-sourcemaps");
const normalize_path = "./node_modules/normalize.css/normalize.css"

function norm() {
    return gulp.src("./node_modules/normalize.css/normalize.css")
        .pipe(cssnano())
        .pipe(gulp.dest("./build"));
}
function compileStyles() {
    var plugins = [
        autoprefixer({overrideBrowserslist: ["last 1 version"]}),
        cssnano()
    ];
    //norm();
    return gulp.src([normalize_path, "./src/styles/main.scss"])
        .pipe(srmaps.init())
            .pipe(sass().on("error", sass.logError))
            .pipe(postCss(plugins))
        .pipe(srmaps.write("./sourcemaps"))
        .pipe(gulp.dest("./build/styles"));
}
module.exports = compileStyles;
function norm() {
    return gulp.src("./node_modules/normalize.css/normalize.css")
        .pipe(gulp.dest("./build"));
}
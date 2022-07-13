const gulp = require("gulp");
const postCss = require("gulp-postcss");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const srmaps = require("gulp-sourcemaps");
function styles(cb) {
    var plugins = [
        autoprefixer({overrideBrowserslist: ["last 1 version"]}),
        cssnano()
    ];
    return gulp.src("./src/styles/main.scss")
        .pipe(srmaps.init())
            .pipe(sass().on("error", sass.logError))
            .pipe(postCss(plugins))
        .pipe(srmaps.write("./sourcemaps"))
        .pipe(gulp.dest("./build/styles"));
    cb();
}
module.exports = styles;
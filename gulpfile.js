const gulp = require("gulp");
const requiredir = require("requiredir");
const tasks = requiredir("./tasks");

const clean = require("gulp-clean");

const del = require("del");


// Пример подгрузки тасков без RequireDir
const buka = require("./tasks/hello_world.js");
const juka = require("./tasks/hello_world_2.js");
module.exports.hello = buka.hello_world;
module.exports.hello2 = juka.hello_world_2;
// Пример подгрузки тасков с помощью RequireDir
module.exports.hello3 = tasks.hello_world_3;
// Подгрузка остальных тасков с помощью RequireDir
module.exports.views = tasks.views;
module.exports.cleanViews = tasks.clean_html;
module.exports.styles = tasks.styles;
module.exports.cleanCss = tasks.clean_css;
module.exports.scripts = tasks.scripts;
module.exports.serve = tasks.serve;
const buildHtml = gulp.series(tasks.clean_html, tasks.views);
module.exports.buildHtml = buildHtml;
const buildStyles = gulp.series(tasks.clean_css, tasks.styles);
module.exports.buildStyles = buildStyles;


module.exports.build = gulp.series(
    buildHtml,
    buildStyles,
    tasks.scripts,
    tasks.serve
);

async function cleanScripts(cb) {
    await del([
        "./build/scripts/*.js"
    ]);
    cb();
}

module.exports.cleanScr = cleanScripts;



gulp.watch("./src/views/**/*.pug").on("change", tasks.views);
gulp.watch("./src/styles/**/*.scss").on("change", tasks.styles);
gulp.watch("./src/scripts/**/*.js").on("change", tasks.scripts);


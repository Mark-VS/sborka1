const gulp = require("gulp");
const requiredir = require("requiredir");
const tasks = requiredir("./tasks");

// Пример подгрузки тасков без RequireDir
const buka = require("./tasks/hello_world.js");
const juka = require("./tasks/hello_world_2.js");
module.exports.hello = buka.hello_world;
module.exports.hello2 = juka.hello_world_2;
// Пример подгрузки тасков с помощью RequireDir
module.exports.hello3 = tasks.hello_world_3;
// Подгрузка остальных тасков с помощью RequireDir
module.exports.cleanViews = tasks.clean_html;
module.exports.views = tasks.views;
module.exports.cleanCss = tasks.clean_css;
module.exports.styles = tasks.styles;
//module.exports.cleanScr = tasks.clean_scripts;
//module.exports.scripts = tasks.scripts;
module.exports.serve = tasks.serve;
//const buildHtml = gulp.series(tasks.clean_html, tasks.views);
module.exports.buildHtml = gulp.series(tasks.clean_html, tasks.views);
//const buildStyles = gulp.series(tasks.clean_css, tasks.styles);
module.exports.buildStyles = gulp.series(tasks.clean_css, tasks.styles);
//const buildScripts = gulp.series(tasks.clean_scripts, tasks.scripts);
//module.exports.buildScripts = buildScripts;
module.exports.buildScripts = gulp.series(tasks.clean_scripts, tasks.scripts);

function watcha() {
    gulp.watch("./src/views/**/*.pug").on("change", gulp.series(tasks.views));
    gulp.watch("./src/styles/**/*.scss").on("change", gulp.series(tasks.styles));
    gulp.watch("./src/scripts/**/*.js").on("change", gulp.series(tasks.scripts));
}
module.exports.watcha = watcha;

module.exports.build = gulp.series(
    gulp.series(tasks.clean_html, tasks.views),
    gulp.series(tasks.clean_css, tasks.styles),
    gulp.series(tasks.clean_scripts, tasks.scripts),
    tasks.serve,
    watcha
);
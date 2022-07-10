const gulp = require("gulp");
const requiredir = require("requiredir");
const tasks = requiredir("./tasks");
//const clean = require("gulp-clean");
//const del = require("del");

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
const buildHtml = gulp.series(tasks.clean_html, tasks.views);
module.exports.buildHtml = buildHtml;
const buildStyles = gulp.series(tasks.clean_css, tasks.styles);
module.exports.buildStyles = buildStyles;
//const buildScripts = gulp.series(tasks.clean_scripts, tasks.scripts);
//module.exports.buildScripts = buildScripts;
module.exports.buildScripts = gulp.series(tasks.clean_scripts, tasks.scripts);

module.exports.build = gulp.series(
    buildHtml,
    buildStyles,
    gulp.series(tasks.clean_scripts, tasks.scripts),
    tasks.serve
);

gulp.task("watcha", function() {
    gulp.watch("./src/views/**/*.pug").on("change", tasks.views);
    gulp.watch("./src/styles/**/*.scss").on("change", tasks.styles);
    gulp.watch("./src/scripts/**/*.js").on("change", tasks.scripts);
});




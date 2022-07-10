const gulp = require("gulp");
var browserSync = require("browser-sync").create();
function reloadBrowser(cb) {
    browserSync.reload();
    cb();
}
function startServer(cb) {
    browserSync.init({
        server: {
            baseDir: "./build"
        },
        open: false
    });
    //gulp.watch("./build").on("change", browserSync.reload);
    //gulp.watch("./build", reloadBrowser);
    gulp.watch("./build").on("change", gulp.series(reloadBrowser));
    cb();
}
module.exports = startServer;
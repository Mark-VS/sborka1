const { src, dest } = require("gulp");
const imagemin = require("gulp-imagemin");
// Я установил gulp-imagemin версии 7.1.0, потому что
// новая, восьмая, версия не подключалась. Галп постоянно выдавал ошибки.
const newer = require("gulp-newer");
function convert_images() {
    return src("./src/img/*")
        .pipe(newer("./build/img"))
        .pipe(imagemin())
        .pipe(dest("./build/img"));
}
module.exports = convert_images;
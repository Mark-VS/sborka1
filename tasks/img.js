const { src, dest } = require("gulp");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");

function convert_images() {
    return src("./src/img/*")
        .pipe(newer("./build/img"))
        .pipe(imagemin())
        .pipe(dest("./build/img"));
}
module.exports = convert_images;
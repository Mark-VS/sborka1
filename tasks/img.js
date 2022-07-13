const { src, dest } = require("gulp");
const newer = require("gulp-newer");
let imagemin;
// imagemin 8-й версии подгружается в качестве ES-модуля
//  Если мы хотим его загрузить из нашего CommonJS'а, то ...
// ... надо это делать не через require, а динамически с помощью import'а.
// Причём выполняться все операции должны асинхронно!
async function loadImageminModule() {
    imagemin = await import("gulp-imagemin");
}
async function convertImages() {
    await loadImageminModule();
    src("./src/img/*")
        .pipe(newer("./build/img"))
        .pipe(imagemin.default())
        .pipe(dest("./build/img"));
}
module.exports = convertImages;
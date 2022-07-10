const { src, dest } = require("gulp");
const webpack = require("webpack-stream");
function scripts(cb) {
    return src("./src/scripts/entry.js")
        .pipe(webpack({
            mode: "production",
            output: {
                filename: "main.js"
            }
        }))
        .pipe(dest("./build/scripts"));
    cb();
}
module.exports = scripts;
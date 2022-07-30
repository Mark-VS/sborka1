const { src, dest } = require("gulp");
const webpack = require("webpack-stream");
function scripts(cb) {
    //return src(["./src/scripts/entry.js", "./src/scripts/bs-components-entry.js"])
    return src("./src/scripts/entry.js")
        .pipe(webpack({
            mode: "production",
            entry: {
                main: "./src/scripts/entry.js",
                "bs-components-entry": "./src/scripts/bs-components-entry.js"
            },
            output: {
                // Если у нас одна входная точка, то выходной файл задаём жёстко:
                    //filename: "main.js",
                // Если же входных точек несколько, то пишем так:
                    filename: "[name].js"
            }
        }))
        .pipe(dest("./build/scripts"));
    cb();
}
module.exports = scripts;
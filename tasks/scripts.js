const { src, dest } = require("gulp");
const webpack = require("webpack-stream");
function scripts(cb) {
    //return src(["./src/scripts/entry.js", "./src/scripts/bs-components-entry.js"])
    return src("./src/scripts/entry.js")
        .pipe(webpack( require("./../webpack.config.js") ))
        .pipe(dest("./build/scripts"));
    cb();
}
module.exports = scripts;
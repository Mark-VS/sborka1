const duda = require("webpack");
module.exports = {
    mode: "production",
    entry: {
        main: "./src/scripts/entry.js",
        "bs-components-entry": "./src/scripts/bs-components-entry.js",
        scrollspy: "./src/scripts/scrollspy.js",
        tempus: "./src/scripts/tempus.js",
        "./../bootstrap/scripts/shala": "./src/scripts/bootstrap-navbar/shala.js"
    },
    output: {
        // Если у нас одна входная точка, то выходной файл задаём жёстко:
            //filename: "main.js",
        // Если же входных точек несколько, то пишем так:
            filename: "[name].js"
    }/*,
    plugins: [
        new duda.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.$": "jquery",
            "window.jquery": "jquery",
            "window.jQuery": "jquery"
        })
    ]
    */
}
function zubik(cb) {
    console.log("Это текст из файла hello_world_2.js");
    cb();
}
module.exports.hello_world_2 = zubik;
function hello() {
    //document.write("<p class='hello1'>Это модуль Hello World 1 из NodeJS.</p>");
    return "Это текст из CommonJS-модуля \"hello_node.js\"";
}
module.exports.helloNode = hello;
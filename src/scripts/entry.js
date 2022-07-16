let helloNode = require("./hello_node.js").helloNode();
import { hello as helloEcma} from "./hello_ecma.js";
import helloEcma2 from "./hello_ecma.js";
let ecma = helloEcma();
let ecma2 = helloEcma2();

document.write("<div class=wrapper>");
    document.write("<div class=load-modules>");
        document.write("<h3 class=load-modules__title>Это \"entry.js\", входной файл.</h3>");
        document.write("<p class=load-modules__desc>Здесь мы поиграемся с импортом модулей: CommonJs и ES.</p>");
        document.write("<p class=load-modules__string>"+helloNode+"</p>");
        document.write("<p class=load-modules__string>"+ ecma +"</p>");
        document.write("<p class=load-modules__string>"+ ecma2 +"</p>");
    document.write("</div>");
document.write("</div>");

// Модуль, который демонстрирует работу jQuery.
// Он выводит в html-документ окно с 6-ю строками и через jQuery изменяет их цвета.
import jqueryDemo from "./jqueryDemoModule";
jqueryDemo();

// Модуль, который подключает @popperjs/core
import PopperDemo from "./popperDemoModule";
try {
    PopperDemo();
} catch(err) {
    err.elemErrorMessage.innerHTML = err.message;
}

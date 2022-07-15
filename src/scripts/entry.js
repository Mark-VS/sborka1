document.write("<p>Это \"entry.js\" - входной файл.</p>");

import $ from "jquery";

var hello1 = require("./hello_node.js");
hello1.helloNode();

import { hello as helloEcma} from "./hello_ecma.js";
helloEcma();

import helloEcma2 from "./hello_ecma";
helloEcma2();

import jqueryDemo from "./jqueryDemoModule";
jqueryDemo();
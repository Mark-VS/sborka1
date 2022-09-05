import $ from "jquery";
//import { createPopper } from "@popperjs/core";
//import * as Popper from "@popperjs/core";
//import * as Utils from "./../../node_modules/bootstrap/js/dist/util";

import Alert from "./../../node_modules/bootstrap/js/dist/alert";
import Dropdown from "./../../node_modules/bootstrap/js/dist/dropdown";


//import * as bootstrap from "bootstrap";


// Проеверяем, работает ли jQuery
$(".lubok").css("color", "green");


import toastAppear from "./tempus-custom/tempus-toast";
toastAppear();

import tooltipAppear from "./tempus-custom/tempus-tooltip";
tooltipAppear();

import popoverAppear from "./tempus-custom/tempus-popover";
popoverAppear();






//import $ from "jquery";
//import * as Popper from "@popperjs/core";
import Tooltip from "./../../../node_modules/bootstrap/js/dist/tooltip";
function mocha() {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl))
}
export default mocha;
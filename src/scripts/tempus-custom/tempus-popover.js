//import $ from "jquery";
//import * as Popper from "@popperjs/core";
import Popover from "./../../../node_modules/bootstrap/js/dist/popover";
function hz() {
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new Popover(popoverTriggerEl))
}
export default hz;
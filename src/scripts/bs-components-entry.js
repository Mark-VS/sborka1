import $ from "jquery";
import { createPopper } from "@popperjs/core";
import Collapse from "./../../node_modules/bootstrap/js/dist/collapse";
import Dropdown from "./../../node_modules/bootstrap/js/dist/dropdown";
import Modal from "./../../node_modules/bootstrap/js/dist/modal";
import Offcanvas from "./../../node_modules/bootstrap/js/dist/offcanvas";
import Popover from "./../../node_modules/bootstrap/js/dist/popover";


const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

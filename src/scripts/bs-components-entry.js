import $ from "jquery";
//import { createPopper } from "@popperjs/core";
//import BaseComponent from "./../../node_modules/bootstrap/js/dist/base-component";

// Тут надо попробовать импортировать все файлы из папки util и посмтреть заработает ли всё это говно.
//import ХЗ from "./../../node_modules/bootstrap/js/dist/util/ХЗ";
//import * as Utils from "./../../node_modules/bootstrap/js/dist/util";

import Alert from "./../../node_modules/bootstrap/js/dist/alert";
import Collapse from "./../../node_modules/bootstrap/js/dist/collapse";
import Dropdown from "./../../node_modules/bootstrap/js/dist/dropdown";
import Modal from "./../../node_modules/bootstrap/js/dist/modal";
import Offcanvas from "./../../node_modules/bootstrap/js/dist/offcanvas";
import Popover from "./../../node_modules/bootstrap/js/dist/popover";
import Scrollspy from "./../../node_modules/bootstrap/js/dist/scrollspy";
import Toast from "./../../node_modules/bootstrap/js/dist/toast";
import Tooltip from "./../../node_modules/bootstrap/js/dist/tooltip";
import Carousel from "./../../node_modules/bootstrap/js/dist/carousel";


// Проверяем, подключен ли jQuery
$("#just_text").css("color", "red");

// Добавляем новый Alert
// ОЧЕНЬ ВАЖНО! Здесь мы переопределяем глобальную функцию alert(),
// поэтому НЕЛЬЗЯ использовать дефолтный alert() в этом документе.
// А то я часто его использую, чтобы тестить работоспособность кода.
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}
const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('Nice, you triggered this alert message!', 'success')
  })
}

// Инициализируем Popover
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new Popover(popoverTriggerEl))

// Делаем Toast видимым
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new Toast(toastLiveExample)
    toast.show()
  })
}

// Инициализируем Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl))
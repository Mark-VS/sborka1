import { createPopper } from "@popperjs/core";
// Новые HTML-элементы
function createErrorMessageElem(title, message) {
    // Мы находим в HTML-документе последний элемент с классом "popcorn-block__line" ...
    // ... и добавляем после него ещё два элемента:
    // ... "popcorn-block__error-title" и "popcorn-block__error-message"
    let elemList = document.getElementsByClassName("popcorn-block__line");
    let lastElemNumber = elemList.length-1;
    let elemLastLine = elemList[lastElemNumber];
    elemLastLine.insertAdjacentHTML("afterend", "<p class='popcorn-block__line popcorn-block__error-title'>"+title+"</p>");
    let elemErrorTitle = document.getElementsByClassName("popcorn-block__error-title")[0];
    elemErrorTitle.insertAdjacentHTML("afterend", "<p class='popcorn-block__line popcorn-block__error-message'>"+message+"</p>");
    let elemErrorMessage = document.getElementsByClassName("popcorn-block__error-message")[0];
    // Делаем текст в добавленных строках красным
    elemErrorTitle.style.color = "red";
    elemErrorMessage.style.color = "red";
}
// Исключение
function PopperException(mess) {
    this.name = "Это исключение, сгенерированное в модуле \"popperDemoModule.js\".";
    this.message = mess;
    this.showMessage = function() {
        createErrorMessageElem(this.name, this.message);
    }

}
// Создаём Popper
function PopperDemo() {
    // Если функция createPopper не существует, значит "@popperjs/core" не подгрузился
    // и значит, выбрасываем исключение - дальнейший код выполняться не будет.
    if (typeof createPopper !== "function")
        throw new PopperException("Библиотека \"@popperjs/core\" не подключена!");
    // Если же @popperjs/core нормально подгрузился, то создаём его
    const popcorn = document.querySelector("#popcorn");
    const tooltip = document.querySelector("#tooltip");
    createPopper(popcorn, tooltip, {
        placement: "right",
        modifiers: [
            {
                name: "offset",
                options: {
                    offset: [0, 8],
                }
            }
        ],
    });
}
// Тестируем PopperDeom перед экспортом
function testPopperDemo() {
    try {
        PopperDemo();
    } catch(err) {
        err.showMessage();
    }
}
export default testPopperDemo;
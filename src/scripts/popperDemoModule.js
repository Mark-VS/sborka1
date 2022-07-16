import { createPopper2 } from "@popperjs/core";
// Исключение
function PopperException(mess) {
    this.name = "Это исключение, сгенерированное в модуле \"popperDemoModule.js\".";
    this.message = mess;
    // Мы находим в HTML-документе последний элемент с классом "popcorn-block__line" ...
    // ... и добавляем посленего ещё два элемента: popcorn-block__error-title и popcorn-block__error-message
    let elemList = document.getElementsByClassName("popcorn-block__line");
    let lastElemNumber = elemList.length-1;
    let elemLastLine = elemList[lastElemNumber];
    elemLastLine.insertAdjacentHTML("afterend", "<p class='popcorn-block__line popcorn-block__error-title'>"+this.name+"</p>");
    let elemErrorTitle = document.getElementsByClassName("popcorn-block__error-title")[0];
    elemErrorTitle.insertAdjacentHTML("afterend", "<p class='popcorn-block__line popcorn-block__error-message'>"+this.message+"</p>");
    let elemErrorMessage = document.getElementsByClassName("popcorn-block__error-message")[0];
    // Делаем их красными
    elemErrorTitle.style.color = "red";
    elemErrorMessage.style.color = "red";
}
// Создаём Popper
function PopperDemoClass() {
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
export default PopperDemoClass;
import { createPopper } from "@popperjs/core";
// Исключение
function PopperException(mess) {
    // Указываем HTML-элемент, куда будет выводиться наше сообщение об ошибке
    this.elemErrorTitle = document.getElementsByClassName("popcorn-block__error")[0];
    this.elemErrorMessage = document.getElementsByClassName("popcorn-block__error")[1];
    this.elemErrorTitle.style.color = "red";
    this.elemErrorMessage.style.color = "red";
    this.message = mess;
    this.name = "Это исключение, сгенерированное в модуле \"popperDemoModule.js\".";
    this.elemErrorTitle.innerHTML = this.name;
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
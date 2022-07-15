function hello() {
    return "Это текст из ES-модуля - текст, который возвращает функция \"hello\"";
}
function defHello() {
    return "Это текст из дефолтной функции ES-модуля.";
}
export { hello };
export default defHello;
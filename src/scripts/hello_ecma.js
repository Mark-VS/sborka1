function hello() {
    document.write("<p class='hello2'>Это модуль Hello Wolrd 2.</p>");
}
function defHello() {
    document.write("<p class='hello3'>Это модуль Hello World 2 с экспортом по дефолту.</p>");
}
export { hello };
export default defHello;
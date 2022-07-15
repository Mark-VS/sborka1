import $ from "jquery";
function jqueryDemo() {
    document.write("<div class=wrapper>");
        document.write("<div class=jquery-block>");
            document.write("<h3 class=jquery-block__title>Это блок для демонстрации jQuery</h3>");
            document.write("<p class=jquery-block__desc>Этот блок создаётся в модуле jqueryDemoModule.js и демонстрирует работу jQuery.</p>");
            document.write("<p class=jquery-block__desc>Мы выводим список из шести строк и с помощью jQuery изменяем css-свойство 'color' у трёх из них.</p>");
            document.write("<ul class=jquery-block__list>");
                document.write("<li class=jquery-block__string>Это первая строка</li>");
                document.write("<li class=jquery-block__string>Это следующая строка</li>");
                document.write("<li class=jquery-block__string>Это уже третья строка</li>");
                document.write("<li class=jquery-block__string>Это четвёртая строка</li>");
                document.write("<li class=jquery-block__string>Это пятая строка</li>");
                document.write("<li class=jquery-block__string>А это шестая и последняя строка</p>");
            document.write("</ul>");
            document.write("</div>");
        document.write("</div>");
    $("li.jquery-block__string:first").css("color", "blue");
    $("li.jquery-block__string:eq(2)").css("color", "purple");
    $("li.jquery-block__string:last").css("color", "green");
}
export default jqueryDemo;
/**
 * Есть код который рассматривали на занятии (который выводит числа в виде таблицы)
 * for (var i = 1; i <= 10; i++) {
 *  for (var j = 1; j <= 10; j++) {
 *    document.write(i * j + " ");
 *  }
 * document.write("<BR />");
 * }
 * Нужно доработать код, чтоб числа выводились в HTML таблице (10 строк и 10 столбцов)
*/

document.write("<table style = 'border : 1px solid blue; border-collapse: collapse;'>");
for (var i = 1; i <= 10; i++) {
  document.write("<tr style = 'border : 1px solid blue;'>");
  for (var j = 1; j <= 10; j++) {
    document.write("<td style = 'border: 1px solid red; text-align: center; padding: 5px;'>");
    document.write(i * j + " ");
    document.write('</td>');
  }
  document.write("</tr>");
}
document.write("</table>");
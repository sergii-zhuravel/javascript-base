document.write("<table style: border solid black 1 px;>");
for (var i = 1; i <= 10; i++) {
  document.write("<tr>");
  for (var j = 1; j <= 10; j++) {
    document.write("<td>" + i * j + " " + "</td>");
  }
  document.write("</tr>");
}
document.write("</table>");

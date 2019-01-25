document.write("<table style = 'border : 1px solid black;'>");

for (var i = 1; i <= 10; i++) {
  document.write("<tr style = 'border : 1px solid black;'>");
    for (var j = 1; j <= 10; j++) {
      document.write("<td style = 'border : 1px solid black; text-align: center;'>" + i * j + "</td>");
    }
  document.write("</tr>");
}

document.write("</table>");

function tableCreate() {
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    for (var i = 1; i <= 10; i++) {
        var row = document.createElement("tr");
        for (var j = 1; j <= 10; j++) {
            var cell = document.createElement("td");
            var cellText = document.createTextNode("cell is row " + j + ", column " + i);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
    tbl.setAttribute("border", "2");
}
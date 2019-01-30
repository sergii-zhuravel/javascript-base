(function () {
        var tbl = document.createElement("table");
        var head= document.head("head")
    for (var i = 1; i <= 10; i++) {
        var row = tbl.insertRow(i);
        for (var j = 1; j <= 10; j++) {
            var cell = row.insertCell(j);
            if (i === 0 && j === 0) {
                cell.width = 45;
            }
            else if (i === 0 && j > 0) {
                cell.className = "blue";
                document.write(cell) = j;
                cell.width = 45;
            }
            else if (i > 0 && j === 0) {
                cell.className = "blue";
                document.write(cell) = i;
            } else {
                document.write(cell) = i * j;
            }
        }
    }
    document.body.appendChild(tbl);
}

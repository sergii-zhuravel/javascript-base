(function () {
        var tbl = document.createElement("table");
        var hd = document.createElement("head")
    for (var i = 0; i < 10; i++) {
        var row = tbl.insertRow(i);
        for (var j = 0; j < 10; j++) {
            var cell = row.insertCell(j);
            if (i === 0 && j === 0) {
                cell.width = 45;
            }
            else if (i === 0 && j > 0) {
                cell.className = "blue";
                cell.textContent = j;
                cell.width = 45;
            }
            else if (i > 0 && j === 0) {
                cell.className = "blue";
                cell.textContent = i;
            } else {
                cell.textContent = i * j;
            }
        }
    }
    document.body.appendChild(tbl);
})()

function generateTable() {
    var numberInput = document.getElementById("numberInput").value;
    var resultContainer = document.getElementById("result");

    if (isNaN(numberInput) || numberInput === "") {
        alert("Please enter a valid number.");
        return;
    }

    var tableHTML = "";
    tableHTML += "<table border='1'><tr><th>Multiplier</th><th>Result</th></tr>";

    for (var i = 1; i <= 10; i++) {
        var result = numberInput * i;
        tableHTML += "<tr><td>" + numberInput + " x " + i + "</td><td>" + result + "</td></tr>";
    }

    tableHTML += "</table>";

    resultContainer.innerHTML = tableHTML;
}
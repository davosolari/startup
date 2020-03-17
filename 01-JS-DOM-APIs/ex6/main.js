let matrixToTable=(rows)=>{
    
    const resultTable = document.getElementById("result-table");
    resultTable.innerHTML = "";
    const table = document.createElement("table");
    
    for (let i=0; i<rows.length; i++){
        let dataRow = rows[i];
        let dataColumns = dataRow.split(" ");
        const tableRow = document.createElement("tr");
    
        for(let j=0; j<dataColumns.length; j++){
            const tableColumn = document.createElement("td")
            tableColumn.appendChild(document.createTextNode(dataColumns[j]));
            tableRow.appendChild( tableColumn );
        }
        table.appendChild(tableRow);
    }
    resultTable.appendChild(table)
}
(function() {
    document.getElementById("create-table").addEventListener("click", function(){
        let inputData = document.getElementById("matrix").value.trim().split(/\n/);
        matrixToTable(inputData);
    });
})();
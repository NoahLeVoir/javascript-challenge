// This variable definition is from the starter code
// from data.js
var tableData = data;

// D3 to recognize the selection of the table
let tbody = d3.select("tbody")

// Functions

    // Building the table
    function buildTable(data){
        
        // Clear any existing data
        tbody.html("");
        
        // Loop through the data variable 
        data.forEach((dataRow) => {
            
            // Append a table row
            let row = tbody.append("tr");
            
            // Iterate values with Object.values & forEach
            Object.values(dataRow).forEach((val) => {
                
                // Append a cell that will hold the table data
                let cell = row.append("td");
                cell.text(val);
            });
        })
    }

    // Button click


// Calling the functions to build the table on the click
buildTable(tableData);
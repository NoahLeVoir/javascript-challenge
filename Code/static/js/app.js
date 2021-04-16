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
    function handleClick(){
        
        // Added to stop the whole page from refreshing
        // Typically a good practice to do this type of prevent
        d3.event.preventDefault();
        
        // Select HTML element
        // Get the value property from the datetime to filter on it
        // let date = d3.select("#datetime").property("value");
        
        // Get the value property from the city to filter on it
        let cityName = d3.select("#city").poperty("value");
        
        let filterData = tableData;
    
        // If logic to see if filtered date is equal to date in the data
        // Create filtered data variable
        // if(date) {
        //     filterData = filterData.filter((row) => row.datetime === date);
        // }
        
        // if logic to see if filtered city is equal to city in the data
        if(cityName) {
            filterData = filterData.filter((row) => row.city === cityName);
        }

        // Call the build function but use the filtered data
        buildTable(filterData);
    }


// Calling the functions to build the table on the click

// Tie the click event to the filter button of html
d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);
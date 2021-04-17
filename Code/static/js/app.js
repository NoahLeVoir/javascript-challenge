// This variable definition is from the starter code
// from data.js
var tableData = data;

// D3 to recognize the selection of the table
var tbody = d3.select("tbody")

// Functions

// Building the table
function buildTable(data){
    
    // Clear any existing data
    tbody.html("");
    
    // Loop through the data variable 
    data.forEach((dataRow) => {
        
        // Append a table row
        var row = tbody.append("tr");
        
        // Iterate values with Object.values & forEach
        Object.values(dataRow).forEach((val) => {
            
            // Append a cell that will hold the table data
            var cell = row.append("td");
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
    var date = d3.select("#datetime").property("value");
    console.log(date);
    
    // Get the value property from the city to filter on it
    var cityName = d3.select("#city").property("value");
    console.log(cityName);

    // // Get the value property from the state to filter on it
    var stateName = d3.select("#state").property("value");
    console.log(stateName);

    // // Get the value property from the country to filter on it
    var countryName = d3.select("#country").property("value");
    console.log(countryName);

    // // Get the value property from the shape to filter on it
    var shapeName = d3.select("#shape").property("value");
    console.log(shapeName);

    // Create variable for filtered data to use in generating new filtered table
    var filterData = tableData;

    // If logic to see if filtered date is equal to date in the data
    // Create filtered data variable
    if(date) {
        filterData = filterData.filter((row) => row.datetime === date);
    }
    
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
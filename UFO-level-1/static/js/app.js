// from data.js
var tableData = data;

// YOUR CODE HERE!

// Create tbody to populate
var tableData = data;
console.log(tableData);

var tbody = d3.select("tbody");

// Display dataset in table
tableData.forEach(function(sighting) {
    console.log(sighting);

    var row = tbody.append("tr");

    Object.entries(sighting).forEach(function([key,value]){
        console.log(key, value);

        var cell = row.append("td");
        cell.text(value);
       
    });
});

var submit = d3.select("#filter-btn");

submit.on("click", function() {

    // Clear table
    d3.select("tbody").html("");

    // Select input value for datetime
    var inputValue = d3.select("#datetime").property("value");
    console.log(inputValue);

    // Create filter
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);

    filteredData.forEach(function(sighting) {
        var row = tbody.append("tr");

        Object.entries(sighting).forEach(function([key, value]) {
            console.log(key,value);
            var cell = row.append('td');
            cell.text(value);
        });

    });

});

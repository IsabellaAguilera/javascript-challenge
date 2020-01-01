// from data.js
var tableData = data;

// YOUR CODE HERE!

var tableData = data;
console.log(tableData);

// Select tbody to populate
var tbody = d3.select("tbody");

// Display dataset in table
tableData.forEach(function(sighting) {
    console.log(sighting);

    var row = tbody.append("tr");

    Object.entries(sighting).forEach(function([key,value]){
        console.log(key,value);

        var cell = row.append("td");
        cell.text(value);
       
    });
});

var submit = d3.select("#filter-btn");

submit.on("click", function() {

    // Clear table
    d3.select("tbody").html("");

    // Select input value for datetime
    var dateTime = d3.select("#datetime").property("value");
    console.log(dateTime);

    var country = d3.select("#country").property("value").toLowerCase();

    var state = d3.select("#state").property("value").toLowerCase();
    
    var city = d3.select("#city").property("value").toLowerCase();
    
    var shape = d3.select("#shape").property("value").toLowerCase();

    filteredData = tableData;

    if (dateTime) {
        filteredData = filteredData.filter(sighting => sighting.datetime === dateTime);
    };

    if (country) {
        filteredData = filteredData.filter(sighting => sighting.country === country);
    };

    if (state) {
        filteredData = filteredData.filter(sighting => sighting.state === state);
    };

    if (city) {
        filteredData = filteredData.filter(sighting => sighting.city === city);
    };

    if (shape) {
        filteredData = filteredData.filter(sighting => sighting.shape === shape);
    };


    filteredData.forEach(function(sighting) {
        var row = tbody.append("tr");

        Object.entries(sighting).forEach(function([key, value]) {
            console.log(key,value);
            var cell = row.append('td');
            cell.text(value);
        });

    });

});

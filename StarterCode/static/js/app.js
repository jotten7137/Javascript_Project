// from data.js
var tableData = data;

// Select table body
var tbody = d3.select("tbody");
// Select id=submit 
var submit = d3.select("#submit");

// Console log data
console.log(tableData);

// Loop through array of objects 
data.forEach((sightingReport) => {
    console.log(sightingReport);
    //append table row for each object
    var row = tbody.append("tr");
    //then each object -> log the key and value
    Object.entries(sightingReport).forEach(([key,value]) => {
        console.log(key,value);
        //update cell's text with values
        var cell = tbody.append('td');
        cell.text(value);
    });
});

//map option
var data_datetime = data.map(data => data.datetime);
var data_city = data.map(data => data.city);
var data_state = data.map(data => data.state);
var data_country = data.map(data => data.country);
var data_shape = data.map(data => data.shape);
var data_durationMin= data.map(data => data.durationMinutes);
var data_comments = data.map(data => data.comments);


//function to take input, filter, and recreate table
//click event handler
submit.on("click", function(){
    //stops page from refreshing
    d3.event.preventDefault();
    //selects summary class
    d3.select(".summary").html("");

    //selects id = datetime 
    var inputElement = d3.select("#datetime");
    //user input as variable
    var inputValue = inputElement.property("value");

    //filter data based on input
    var filteredData = tableData.filter(tableData => tableData.inputElement === inputValue);

    //loop through data
    filteredData.forEach((dateData) => {
        var row = tbody.append("tr");
        Object.entries(dateData).forEach(([key,value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});

tbody.on("change",submit);
//renderTable();
document.addEventListener("DOMContentLoaded", function() {
    var jsonContainer = document.getElementById("json-container");

    // Load the JSON file
    fetch("db.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            // Display the JSON data
            jsonContainer.innerText = JSON.stringify(jsonData, null, 4);
        })
        .catch(function(error) {
            console.log("Error loading JSON file:", error);
        });
});

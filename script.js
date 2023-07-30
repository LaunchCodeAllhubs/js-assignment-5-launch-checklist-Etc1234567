const { formSubmission } = require("./scriptHelper");

// Write your JavaScript code here!
const form = document.getElementById("testForm");
let pilotStatus = document.getElementById("pilotStatus");
let copilotStatus = document.getElementById("copilotStatus");


window.addEventListener("load", function() { 
    
    form.addEventListener("submit", function(event) {
       console.log("Hello, everyone!")
        validateInput();
        formSubmission();
        
    });
});

    

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   

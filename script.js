const { formSubmission, addDestinationInfo } = require("./scriptHelper");

// Write your JavaScript code here!
const form = document.getElementById("testForm");

window.addEventListener("load", function() { 
    
    console.log("Hello, everyone!");

    form.addEventListener("submit", function(event) {
       
        
       //validateInput(pilotInput.value, copilotInput.value, fuelLevelInput.value, cargoLevelInput.value);
       // formSubmission(document, list, pilotInput.value, copilotInput.value, fuelLevelInput.value, cargoLevelInput.value);
    });
});

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse= planetsReturned;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       pickPlanet(planets);
       addDestinationInfo(planet);
   })
   

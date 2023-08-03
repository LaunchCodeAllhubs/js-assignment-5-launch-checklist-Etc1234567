//const { formSubmission, addDestinationInfo } = require("./scriptHelper");

//const { myFetch } = require("./scriptHelper");

// Write your JavaScript code here!

window.addEventListener("load", function() { 
    const form = document.querySelector("form");
    let list = document.getElementById("faultyItems");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let pilotInput = document.querySelector("input[name=pilotName]");
        let copilotInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoLevelInput = document.querySelector("input[name=cargoMass]");
        let pilot = pilotInput.value;
        let copilot = copilotInput.value;
        let fuelLevel= Number(fuelLevelInput.value);
        let cargoLevel= Number(cargoLevelInput.value);

             formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);   
    
    });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse= myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let chosenPlanet= pickPlanet(listedPlanets);
       addDestinationInfo(document, chosenPlanet.name, chosenPlanet.diameter, chosenPlanet.star, chosenPlanet.distance, chosenPlanet.moons, chosenPlanet.image); 
   })
}); 

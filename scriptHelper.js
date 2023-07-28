// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    let pilot = document.querySelector("input[name=pilotName]");
         let copilot = document.querySelector("input[name=copilotName]");
         let fuelLevel = document.querySelector("input=[name=fuelLevel]");
         let cargoLevel = document.querySelector("input=[name=cargoMass]");

    if (pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoLevel.value === "")  {
        return "Empty";
        //alert("All fields are required!");
     }   
    
     if (isNaN(fuelLevel.value) || isNaN(cargoLevel.value) || isNaN(pilot.value) || isNaN(copilot.value)) {
        return "Not a Number";
     }
     else if (!isNaN(fuelLevel.value) || !isNaN(cargoLevel.value) || !isNaN(pilot.value) || !isNaN(copilot.value)) {
        return "Is a number";
     }

}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
         validateInput();
    });
};

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

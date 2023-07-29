// Write your helper functions here!
require('isomorphic-fetch');

let pilot = document.getElementById("pilotName");
let copilot = document.getElementById("copilotName");
let fuelLevel = document.getElementById("fuelLevel");
let cargoLevel = document.getElementById("cargoMass");
let response = "";

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
    
    if (pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoLevel.value === "")  {
        let response = "Empty";
        return response;
     }   
    
    else if (isNaN(fuelLevel.value) || isNaN(cargoLevel.value)) {
        let response = "Not a Number";
        return response;
     }
     else if (isNaN(pilot.value) === false || isNaN(copilot.value)=== false) {
        let response = "Is a number";
        return response;
     }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
         
    validateInput(pilot, copilot, fuelLevel, cargoLevel);
        //  if (response = "Empty") {
        //     alert("All fields are required!");
        //     //event.preventDefault();
        //  }

         
    }

document.addEventListener("click", formSubmission) 
    console.log(response);



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

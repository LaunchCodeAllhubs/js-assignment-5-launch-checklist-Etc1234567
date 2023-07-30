// Write your helper functions here!
require('isomorphic-fetch');

let pilotInput = document.getElementById("pilotName");
let copilotInput = document.getElementById("copilotName");
let fuelLevelInput = document.getElementById("fuelLevel");
let cargoLevelInput = document.getElementById("cargoMass");

const faultyItems = document.getElementById("#faultyItems");
let fuelStatus = document.getElementById("fuelStatus");
let launchStatus = document.getElementById("launchStatus");
let cargoStatus = document.getElementById("cargoStatus");

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
    
    if (pilotInput.value === "" || copilotInput.value === "" || fuelLevelInput.value === "" || cargoLevelInput.value === "")  {
        let response = "Empty";
        return response;
     }   
    
    else if (isNaN(fuelLevelInput.value) || isNaN(cargoLevelInput.value)) {
        let response = "Not a Number";
        return response;
     }
     else if (!isNaN(pilotInput.value) || !isNaN(copilotInput.value)) {
        let response = "Is a number";
        return response;
     }

     else if (fuelLevelInput.value < 10000){
        fuelLevel.innerHTML= `${fuelLevelInput.value}`;
        faultyItems.style.visibility = "visible";
        fuelStatus.innerHTML= "Insufficient fuel for launch.";
        launchStatus.style.color= "red";
        launchStatus.innerHTML= "<h2> Shuttle not ready for launch. </h2>"
     }

     else if (cargoLevelInput.value > 10000){
        cargoLevel.innerHTML= `${cargoLevelInput.value}`;
        faultyItems.style.visibility = "visible";
        cargoStatus.innerHTML= "Mass is too high for takeoff.";
        launchStatus.style.color= "#C7254E";
        launchStatus.innerHTML= "<h2> Shuttle not ready for launch. </h2>";
     }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
         
   validateInput(pilotInput.value, copilotInput.value, fuelLevelInput.value, cargoLevelInput.value);
          
    if (response === "Empty") {
             alert("All fields are required!");
             event.preventDefault();
            }
    
    if (response === "Not a Number") {
        alert("Please enter a number for Fuel Level or Cargo Mass.");
        event.preventDefault();
            }

    if (response === "Is a Number") {
        alert("Please enter a name for the Pilot and Copilot.");
        event.preventDefault();
            }

    faultyItems.style.visibility = "visible";
    pilotStatus.innerHTML= `<li> ${pilotInput.value} Ready </li>`;
    copilotStatus.innerHTML= `<li> ${copilotInput.value} Ready </li>`;

    launchStatus.style.color= "#419F6A";
    launchStatus.innerHTML = "<h2> Shuttle is ready for launch. </h2>";
         
    }

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

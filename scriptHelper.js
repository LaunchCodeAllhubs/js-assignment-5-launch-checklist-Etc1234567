// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let missionTarget = document.getElementById("missionTarget");
   missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star} </li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">
   `;
}

function validateInput(testInput) {
    
    if (testInput === "")  {
        return "Empty";
     }   
    
    else if (isNaN(testInput)) {
        return "Not a Number";
     }

     else if (!isNaN(testInput)) {
        return "Is a number";
     }

    return;
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let fuelStatus = document.getElementById("fuelStatus");
    let launchStatus = document.getElementById("launchStatus");
    let cargoStatus = document.getElementById("cargoStatus");

if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
    window.alert("All fields are required!");
    }

 else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number" || validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        window.alert("Please enter valid information in each field.");
    }

else {

list.style.visibility = "visible";

pilotStatus.innerHTML= `${pilotInput.value} Ready`;
copilotStatus.innerHTML= `${copilotInput.value} Ready`; 

if (fuelLevelInput.value < 10000 && cargoLevelInput.value < 10000) {
     fuelLevel.innerHTML= `${fuelLevelInput.value}`;
     fuelStatus.innerHTML= "Insufficient fuel for launch.";
     cargoLevel.innerHTML= `${cargoLevelInput.value}`;
     cargoStatus.innerHTML= "Mass is sufficient for takeoff.";
     launchStatus.style.color= "red";
     launchStatus.innerHTML= "Shuttle not ready for launch."
    }

else if (cargoLevelInput.value > 10000 && fuelLevelInput.value > 10000){
    cargoLevel.innerHTML= `${cargoLevelInput.value}`;
    cargoStatus.innerHTML= "Mass is too high for takeoff.";
    fuelLevel.innerHTML= `${fuelLevelInput.value}`;
    fuelStatus.innerHTML= "Sufficient fuel for launch.";
    launchStatus.style.color= "#C7254E";
    launchStatus.innerHTML= "Shuttle not ready for launch.";
        }

else if (cargoLevelInput.value > 10000 && fuelLevelInput.value < 10000){
    cargoLevel.innerHTML= `${cargoLevelInput.value}`;
    cargoStatus.innerHTML= "Mass is too high for takeoff.";
    fuelLevel.innerHTML= `${fuelLevelInput.value}`;
    fuelStatus.innerHTML= "Insufficient fuel for launch.";
    launchStatus.style.color= "#C7254E";
    launchStatus.innerHTML= "Shuttle not ready for launch.";
}
    
else {
    cargoLevel.innerHTML= `${cargoLevelInput.value}`;
    cargoStatus.innerHTML= "Mass sufficient for takeoff.";
    fuelLevel.innerHTML= `${fuelLevelInput.value}`;
    fuelStatus.innerHTML= "Sufficient fuel for launch.";
    launchStatus.style.color= "#419F6A";
    launchStatus.innerHTML = "Shuttle is ready for launch.";
    }

}

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random() * (planets.length));
    let planet = planets[index];
    return planet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

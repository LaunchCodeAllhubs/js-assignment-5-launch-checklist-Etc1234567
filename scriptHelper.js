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
                <img src = "${imageUrl}">
   `;
}

function validateInput(testInput) {

let numberInput = (testInput);

    if (testInput === "")  {
        return "Empty";
     }  
    
     else if (isNaN((numberInput)) === false) {
        return "Is a Number";
     }

    else if (isNaN((numberInput))) {
        return "Not a Number";
     }

     
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let fuelStatus = document.getElementById("fuelStatus");
    let launchStatus = document.getElementById("launchStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");

if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
    window.alert("All fields are required!");
    }

 else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number" || validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
    window.alert("Please enter valid information in each field.");
    }

else {

pilotStatus.innerHTML= `Pilot ${pilot} is ready for launch`;
copilotStatus.innerHTML= `Co-pilot ${copilot} is ready for launch`; 

if (fuelLevel < 10000 && cargoLevel < 10000) {
    list.style.visibility = "visible";
     fuelStatus.innerHTML= "Fuel level too low for launch";
     cargoStatus.innerHTML= "Cargo mass low enough for launch";
     launchStatus.style.color= "rgb(199, 37, 78)";
     launchStatus.innerHTML= "Shuttle Not Ready for Launch"
    }

else if (cargoLevel > 10000 && fuelLevel >= 10000){
    list.style.visibility = "visible";
    cargoStatus.innerHTML= "Cargo mass too heavy for launch";
    fuelStatus.innerHTML= "Fuel level high enough for launch";
    launchStatus.style.color= "#C7254E";
    launchStatus.innerHTML= "Shuttle Not Ready for Launch";
        }

else if (cargoLevel > 10000 && fuelLevel < 10000){
    list.style.visibility = "visible";
    cargoStatus.innerHTML= "Cargo mass too heavy for launch";
    fuelStatus.innerHTML= "Fuel level too low for launch";
    launchStatus.style.color= "#C7254E";
    launchStatus.innerHTML= "Shuttle Not Ready for Launch";
}
    
else {
    cargoStatus.innerHTML= "Cargo mass low enough for launch";
    fuelStatus.innerHTML= "Fuel level high enough for launch";
    launchStatus.style.color= "#419F6A";
    launchStatus.innerHTML = "Shuttle is Ready for Launch";
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
    let chosenPlanet= planets[index];
    return chosenPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;

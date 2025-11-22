/*
Length 1 meter = 3.281 feet
Volume 1 liter = 0.264 gallon
Mass 1 kilogram = 2.204 pound
*/

//create 3 functions to convert units for length, volume and mass


const lengthOutput = document.getElementById("length-output");
const volumeOutput = document.getElementById("volume-output");
const massOutput = document.getElementById("mass-output");
const convertBtn = document.getElementById("convert-btn");
const inputEl = document.getElementById("input-el");

convertBtn.addEventListener("click", function() {
    const inputValue = parseFloat(inputEl.value);
    lengthOutput.textContent = convertLength(inputValue);
    volumeOutput.textContent = convertVolume(inputValue);
    massOutput.textContent = convertMass(inputValue);
})

function convertLength(meters) {
    const feet = meters * 3.281;
    return `${meters} meters = ${feet.toFixed(3)} feet | ${feet.toFixed(3)} feet = ${(feet / 3.281).toFixed(3)} meters`;
}

function convertVolume(liters) {
    const gallons = liters * 0.264;
    return `${liters} liters = ${gallons.toFixed(3)} gallons | ${gallons.toFixed(3)} gallons = ${(gallons / 0.264).toFixed(3)} liters`;
}

function convertMass(kilograms) {
    const pounds = kilograms * 2.204;
    return `${kilograms} kilograms = ${pounds.toFixed(3)} pounds | ${pounds.toFixed(3)} pounds = ${(pounds / 2.204).toFixed(3)} kilograms`;
}


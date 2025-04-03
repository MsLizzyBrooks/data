let catData; // Variable to store JSON data
let catFact = "Loading..."; // Default text before data loads

function preload() {
  // Load JSON data before setup runs
  catData = loadJSON('https://catfact.ninja/fact');
}

function setup() {
  createCanvas(400, 400);
  
  
  console.log(catData.fact)
  catFact = catData.fact

}

function draw(){

    text(catFact, 100,100)

}

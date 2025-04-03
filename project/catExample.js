
let catData; // Variable to store JSON data
let catFact = "Loading..."; // Default text before data loads

function preload() {
  // Load JSON data before setup runs
  catData = loadJSON('https://catfact.ninja/fact');
}

function setup() {
  createCanvas(600, 400);

  
  console.log(catData.fact)
  catFact = catData.fact

}

function draw(){
  background("black")
  textFont('Arial')
  fill ("white")
  textSize(14)
    text(catFact, 100,100)

}

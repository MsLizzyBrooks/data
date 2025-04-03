var dogData; // Variable to store JSON data
var dogImg;  // Variable to store the dog image

function preload() {
  // Load JSON data before setup runs
  dogData = loadJSON('https://dog.ceo/api/breeds/image/random');
}

function setup() {
  createCanvas(400, 400);
  background(220);
  textAlign(CENTER, CENTER);
  
  // Extract the image URL from the loaded JSON data
  if (dogData && dogData.message) {
    dogImg = loadImage(dogData.message);
  }

  // Display loading message while image loads
  fill(0);
  textSize(16);
  text("Loading dog image...", width / 2, height / 2);
}

function draw() {
  if (dogImg) {
    background(220);
    image(dogImg, width / 2 - 100, height / 2 - 100, 200, 200);
  }
}
let birb;
//its meant to be spelled that way...
//let img;
let jon;
let der;
let hop;
let kip;
let tem;

let shapeArray = [];

var boxTranslationX = -100;
var boxTranslationY = -100;

function preload() {
  // Load model with normalise parameter set to true
  birb = loadModel('glub glub.stl', true);
  //img = loadImage('images/bird feathers.jpg');
  jon = loadImage('images/Jonah.jpg');
  der = loadImage('images/Derek.jpg');
  hop = loadImage('images/Hope.jpg');
  kip = loadImage('images/Kippy.jpg');
  tem = loadImage('images/Temple.jpg');
}

function setup() {
  createCanvas(800, 800, WEBGL);
  pg = createGraphics(256,256);
  shapeArray.push(new shapeclass("box", 100, 100, 100, boxTranslationX, boxTranslationY, 0.25, 0.25, 0.30, der));
  shapeArray.push(new shapeclass("cylinder", 80, 90, 0, 200, 20, 0.15, 0.55, 0.30, kip));
}

function draw() {
  colorMode(HSB)
    background(202, 93, 46);
    
    image(der);
    image(kip);

    for (var i = 0; i < shapeArray.length; i++) {
      shapeArray[i].draw(frameCount);
    }

  scale(1.0); // Scaled to make model fit into canvas
  rotateX(frameCount * 0.25);
  rotateY(frameCount * 0.25);
  normalMaterial(); // For effect
  //texture(img);
  model(birb);

  push();
  translate(100,-100,-100);
  normalMaterial();
  rotateX(frameCount * .01);
  texture(jon);
  sphere(40);
  pop();

//push();
 // translate(200,-40,250);
 // normalMaterial();
 // rotateX(frameCount * 0.67);
//  rotateY(frameCount * 0.67);
//  texture(der);
//  box(50);
//  pop();

  push();
  translate(10,237,100);
  normalMaterial();
  rotateX(frameCount * 3.00);
  rotateY(frameCount * 3.00);
  texture(hop);
  torus(30, 15);
  pop();


  //push();
 // translate(50,-37,140);
 // normalMaterial();
 // rotateX(frameCount * 10.00);
 // rotateY(frameCount * 3.00);
 // rotateZ(frameCount * 10.00);
 // texture(kip);
 // cylinder(20, 50);
 // pop();

push();
translate(300,-237,-240);
normalMaterial();
rotateX(frameCount * 0.01);
rotateZ(frameCount * 0.01);
texture(tem);
cone(40, 70,);

if (mouseIsPressed) {
  boxTranslationX = 58;
  boxTranslationY = 0;
  boxTranslationX = floor(random(600));
  boxTranslationY = floor(random(400));
}










}
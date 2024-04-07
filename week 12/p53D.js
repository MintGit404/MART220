let pg;
let setRedSpecularColor = true;

function setup() {
    createCanvas(800, 800, WEBGL);
    pg = createGraphics(256,256);
  
}

function draw() {
    colorMode(HSB)
    background(202, 93, 46);

    rotateX(frameCount * 0.50);
    rotateY(frameCount * 0.50);
    torus(70, 25);

    push();
    translate(300,-20,-100);

    normalMaterial();
    rotateX(frameCount * .01);
   
    cone(40, 50, 100);
    pop();

    ambientLight(60);
    let lightPosX = mouseX - width / 2;
    let lightPosY = mouseY - height / 2;
    // -- set the light's specular color
    if (setRedSpecularColor) {
      specularColor(255, 0, 0); // red specular highlight
    }
    // -- create the light
    pointLight(200, 200, 200, lightPosX, lightPosY, 50); // white light
  
    // use specular material with high shininess
    specularMaterial(150);
    shininess(50);
    rotateX(frameCount * 5.00);
    rotateY(frameCount * 5.00);
    box(50);

   

    push();
    translate(100,-100,-100);

    normalMaterial();
    rotateX(frameCount * .01);
   
    cylinder(20, 50);

    pop();

    push();
    translate(400,-50,-50);

    rotateX(frameCount * .01);
    ellipsoid(30, 40, 40);

    pop();

  }



let fries = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 10; i++) {
    fries.push(new Fry());
  }
}

function draw() {
  background(220);

  for (let fry of fries) {
    fry.move();
    fry.display();
  }
}

class Fry {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.speed = random(1, 3);
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);

    // Wrap around the canvas
    this.x = (this.x + width) % width;
    this.y = (this.y + height) % height;
  }

  display() {
    fill(255, 204, 0); // Fries color (yellow-ish)
    rect(this.x, this.y, 20, 5); // Fries shape
  }
}

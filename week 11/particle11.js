var idlePaths = [];
var walkPaths = [];
var attackPaths = [];

var myImageArray = [];

var myAnimation;
var myWalkAnimation;

var points = 0;
var myTime = 10;

var imageX = 100;
var imageY = 100;

var fryX = 460;
var fryY = 260;

let goodFry;
let mold;
let rock;

var health = 100;

const particles = [];




function preload() {
  idlePaths = loadStrings("images idle/idle.txt");
  walkPaths = loadStrings("images walk/walk.txt");
  //jump will be attack subsitute
  attackPaths = loadStrings("imagesjump/jump.txt");
}

function setup() {
  createCanvas(1000, 800);

  x = 100;
  y = width;
  w = 100;
  h = height;


  myAnimation = new character(imageX, imageY, 416, 454);
  myAnimation.myLoadAnimation('idle', idlePaths);
  myAnimation.myLoadAnimation('walk', walkPaths);
  myAnimation.myLoadAnimation('attack', attackPaths);

  //create classes v
  // good
  goodFry = new Sprite(fryX, fryY, 260, 280, 'static');
  goodFry.img = "./image objects/good fries.jpg";
  goodFry.scale = 0.50;
  goodFry.diameter = 50;

  //bad
  mold = new Sprite(550, 600, 360, 295, 'static');
  mold.img = "./image objects/moldy.jpg";
  mold.scale = 0.40;
  mold.diameter = 50;

  //blocking
  rock = new Sprite(300, 500, 250, 158, 'static');
  rock.img = "./image objects/rock image.jpg";
  rock.scale = 0.40;
  rock.diameter = 150;



  setInterval(decreaseCounter, 1000);

  //NOTE
  //'static' = unmovable. Without static = moves by collision 
  //keep static on for no movement






}

// display all the frames using the draw function as a loop
function draw() {
  colorMode(HSB)
  background(202, 93, 46);

  for (let i = 0; i < 5; i++) {
    let p = new Particle();
    particles.push(p);
  }
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }

  if(kb.pressing('d'))
  {
      if(myAnimation.isColliding(rock))
      {
          myAnimation.drawAnimation('idle');
          myAnimation.updatePosition('idle');
          
      }  
      else if(myAnimation.isColliding(goodFry))
      {
          goodFry.remove();
          points++;
      }  
      myAnimation.updatePosition('forward');
      myAnimation.drawAnimation('walk'); 
     
 
      
      if(myAnimation.isColliding(mold))
      {
          mold.remove();
          points--;
      }  
      myAnimation.updatePosition('forward');
      myAnimation.drawAnimation('walk');  
        
        
  }
  else if(kb.pressing('a'))
  {
      if(myAnimation.isColliding(rock))
      {
          myAnimation.drawAnimation('idle');
          myAnimation.updatePosition('idle');  
      } 
      else if(myAnimation.isColliding(goodFry))
      {
          goodFry.remove();
          points++;
      }  
      myAnimation.updatePosition('forward');
      myAnimation.drawAnimation('walk');     
      myAnimation.updatePosition('reverse');
      myAnimation.drawAnimation('walk');  
      
      if(myAnimation.isColliding(mold))
      {
          mold.remove();
          points--;
      }  
      myAnimation.updatePosition('reverse');
      myAnimation.drawAnimation('walk');    
        
  }
  else if(kb.pressing('w'))
  {
      if(myAnimation.isColliding(rock))
      {
          myAnimation.drawAnimation('idle');
          myAnimation.updatePosition('idle');
          
      }  
      
      else if(myAnimation.isColliding(goodFry))
      {
          goodFry.remove();
          points++;
      }  
      myAnimation.updatePosition('forward');
      myAnimation.drawAnimation('walk');    
      myAnimation.updatePosition('up');
      myAnimation.drawAnimation('walk'); 

      if(myAnimation.isColliding(mold))
      {
          mold.remove();
          points--;
      }  
      myAnimation.updatePosition('up');
      myAnimation.drawAnimation('walk'); 
     

  }
  
  else if(kb.pressing('s'))
  {
      if(myAnimation.isColliding(rock))
      {
          myAnimation.drawAnimation('idle');
          myAnimation.updatePosition('idle');
          
      }  
      else if(myAnimation.isColliding(goodFry))
      {
          goodFry.remove();
          points++;
      }  
      myAnimation.updatePosition('forward');
      myAnimation.drawAnimation('walk');    
      myAnimation.updatePosition('down');   
      myAnimation.drawAnimation('walk'); 
      
      if(myAnimation.isColliding(mold))
      {
          mold.remove();
          points--;
      }  
      myAnimation.updatePosition('down');
      myAnimation.drawAnimation('walk'); 
  }
  else if (kb.pressing('x')) {
    myAnimation.drawAnimation('attack');
    if (rock != null) {
        if (dist(myAnimation.getCurrentAnimation().position.x, myAnimation.getCurrentAnimation().position.y, rock.position.x, rock.position.y) < 200) {
            createParticles(rock.position.x, rock.position.y);
            health -= 1;
            if(health <= 0)
            {
                rock.remove();
                rock = null;
            }    
        }

    }
}
  else
  {
      myAnimation.drawAnimation('idle');
  } 
  //if (kb.pressing('x')) {
   // myAnimation.drawAnimation('attack');
//}
//else {
   // myAnimation.drawAnimation('idle');
//}
  
  goodFry.debug = mouseIsPressed;



    fill(359, 0, 100);
    textSize(24);
    text("Health " + points, 350, 50);

    fill(359, 0, 100);
    textSize(24);
    text(myTime + " New Food", 50, 50);

  }




function addNewFood() {

  goodFry = new Sprite(random(x, y), random(w, h));
  goodFry.img = "./image objects/good fries.jpg";
  goodFry.scale = 0.50;
  goodFry.diameter = 50;




}

function addNewBad() {

  mold = new Sprite(random(x, y), random(w, h));
  mold.img = "./image objects/moldy.jpg";
  mold.scale = 0.40;
  mold.diameter = 50;

}
//added this for'kb pressing x'

function changeTime() {
  i++;
  if (i > myImageArray.length - 1) {
    i = 0;
  }
}

function decreaseCounter() {
  myTime--;
  if (myTime <= 0) {
    myTime = 10;

    {

      addNewFood();
    }
    myTime = 10;

    {

      addNewBad();
    }
  }
}
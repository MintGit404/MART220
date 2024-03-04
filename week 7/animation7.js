var myImageObject, myImageObject2, myImageObject3, myImageObject4, myImageObject5,
  myImageObject6, myImageObject7, myImageObject8, myImageObject9, myImageObject10, myImageObject11, myImageObject12, myImageObject13, myImageObject14,
  myImageObject15, myImageObject16, myImageObject17, myImageObject18, myImageObject19, myImageObject20;

var myImageArray = [];
//var myFryArray =[];
var walkPaths = [];
var animations = [];
var walkAnimations = [];

var flipX = false;
var flipY = false;

var myTime = 10;
var points = 0;

var i = 0;
var j = 0;

var idleStrings = [];


//var fryX = 100;
//var fryY = 60;

var imageX = 100;
var imageY = 100;

var myFry;

var fryX = 460;
var fryY = 260;
var fry1speed = 0;

function preload() {

  idleStrings = loadStrings("images idle/idle.txt");
  walkPaths = loadStrings("images walk/walk.txt");
}

function setup() {
  createCanvas(900, 800);
  /*
  myImageObject = new myImage("../Orginal code/images/Walk (1).png", imageX,100, 416,454);
  myImageObject2 = new myImage("../Orginal code/images/Walk (2).png", imageX,100, 416,454);
  myImageObject3 = new myImage("../Orginal code/images/Walk (3).png", imageX,100, 416,454);
  myImageObject4 = new myImage("../Orginal code/images/Walk (4).png", imageX,100, 416,454);
  myImageObject5 = new myImage("../Orginal code/images/Walk (5).png", imageX,100, 416,454);
  myImageObject6 = new myImage("../Orginal code/images/Walk (6).png", imageX,100, 416,454);
  myImageObject7 = new myImage("../Orginal code/images/Walk (7).png", imageX,100, 416,454);
  myImageObject8 = new myImage("../Orginal code/images/Walk (8).png", imageX,100, 416,454);
  myImageObject9 = new myImage("../Orginal code/images/Walk (9).png", imageX,100, 416,454);
  myImageObject10 = new myImage("../Orginal code/images/Walk 10).png", imageX,100, 416,454);

  myImageArray[0] = myImageObject;
  myImageArray[1] = myImageObject2;
  myImageArray[2] = myImageObject3;
  myImageArray[3] = myImageObject4;
  myImageArray[4] = myImageObject5;
  myImageArray[5] = myImageObject6;
  myImageArray[6] = myImageObject7;
  myImageArray[7] = myImageObject8;
  myImageArray[8] = myImageObject9;
  myImageArray[9] = myImageObject10;
*/


  myFry = new fry(fryX, fryY, 30, 130);

  fry1speed = random(1, 11);


  for (var n = 0; n < idleStrings.length; n++) {

    myImageArray[n] = new imageClass(idleStrings[n], imageX, imageY, 416, 454);
    animations[n] = myImageArray;
  }

  for (var n = 0; n < walkPaths.length; n++) {

    walkAnimations[n] = new imageClass(walkPaths[n], imageX, imageY, 416, 454);

  }


  //for(var o = 0; 0 < 1; o++)
  //{
  //   myFryArray[o] = new fry (fryX,fryY, 30,130);
  //}

  setInterval(updateImage, 50);
  setInterval(incrementWalkIndex, 50);

  setInterval(changeTime, 100);
  setInterval(decreaseCounter, 1000);

}

function draw() {
  colorMode(HSB)
  background(202, 93, 46);

  //myFryArray[L].draw();
  myFry.drawRect();
  //myFry.y=myFry.y+fry1speed
  //console.log("fry")



  //myImageArray[i].draw();
  //walkAnimations[j].draw();

  // 1st top fry  rect(60,60,30,130);
  //fill(42,76,100);
  //rect(60,fry1,30,130);
  //fry1 += fry1speed;
  //fry1x += fry1speed;
  //if( fry1 >= width )
  if (myFry.y >= height) {
    myFry.y = 60;
  }

  if (keyIsPressed) 
  {
    if (key == 'd') 
    {
      walkAnimations[j].draw();

    }
    else 
    {
      myImageArray[i].draw();
    }
  }
  else 
  {
    myImageArray[i].draw();
  }






  if (keyIsPressed) {


    if (key == 'a') {
      imageX -= 5;
      flipX = true;
      for (var k = 0; k < myImageArray.length; k++) 
      {
        myImageArray[k].updateX(imageX);
        
        
        if (checkCollision(myFry.x, myFry.y, myFry.w, myFry.h, myImageArray[k].x, myImageArray[k].y, myImageArray[k].w, myImageArray[k].h)) {
          myFry.x = null;
          points ++;
        }

      }

    }

    else if (key == 'd') {
      imageX += 5;
      flipX = false;
      for (var k = 0; k < myImageArray.length; k++) 
      {
        myImageArray[k].updateX(imageX);

        if (checkCollision(myFry.x, myFry.y, myFry.w, myFry.h, myImageArray[k].x, myImageArray[k].y, myImageArray[k].w, myImageArray[k].h)) {
          myFry.x = null;
          points ++;
        }

      }
    }
    else if (key == 'w') {
      imageY -= 5;
      for (var m = 0; m < myImageArray.length; m++) 
      {
        myImageArray[m].updateY(imageY);
      }
    }
    else if (key == 's') {
      imageY += 5;
      for (var m = 0; m < myImageArray.length; m++) 
      {
        myImageArray[m].updateY(imageY);
      }
    }

    
    for (var ii = 0; ii < myImageArray.length; ii++) {
      myImageArray[ii].updateX(imageX);
      myImageArray[ii].updateFlip(flipX);
      walkAnimations[ii].updateX(imageX);
      walkAnimations[ii].updateFlip(flipX);

      myImageArray[ii].updateY(imageY);
      myImageArray[ii].updateFlip(flipY);
      walkAnimations[ii].updateY(imageY);
      walkAnimations[ii].updateFlip(flipY);
     
      
     
  }
  
}

fill(359,0,100);
textSize(24);
text("Score" + points, 350, 50);

fill(359,0,100);
textSize(24);
text(myTime + "Seconds", 50, 50);

  //myImageObject.draw();
}
function checkCollision(x, y, w, h, x2, y2, w2, h2) 
{

  if (
    x - w / 2 < x2 + w2 / 2 &&
    x + w2 / 2 > x2 - w / 2 &&
    y - h2 / 2 < y2 + h / 2 &&
    y + h2 / 2 > y2 - h / 2

  ) {
    return true;
  } else {
    return false;
  }
}

function updateImage() {
  i++;
  if (i > myImageArray.length - 1) 
  {
    i = 0;
  }
}

function incrementWalkIndex() 
{
  j++;
  if (j >= walkAnimations.length) 
  {
    j = 0;
  }
}

function changeTime()
{
  i++;
  if (i > myImageArray.length -1)
  {
    i = 0;
  }
}

function decreaseCounter()
{
  myTime--;
  if (myTime <= 0)
  {
    myTime = 10;
  }
}




//function draw()
//{
//myFry.draw();
//}

//function updateFry()
//{
// L++;
// if(L > myFryArray.length-1)
// {
//     L = 0;
// }
//}
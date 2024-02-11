//fry top 1
var fry1 = 60;
var fry1x = 60;
var fry1speed = 0;

var fry3 = 140;
var fry3y = 60;
var speed3 = 1;

var myTime = 10;


//bottom 2 fry
//var bottomfry2 = 60;
//var bottomfry2x = 60;
//var bottomfryspeed = 0;

var top4 = 180;
var top4y = 180;
var top4speed = 0;

var x = 100;
var y = 100;

//nyan cat
var pic;
var imageX = 300, imageY = 300;
var speedpicx, speedpicY;
var myFont;

//keyboard cat
var pic2;
var keyX = 1, keyY = 500;

var pic3;
var grumpX = 370, grumpY = 1;



 
function setup()
{
    createCanvas(900,970);

    pic = loadImage("../images/nyancat.jpg");
    speedpicX = random(1, 5);
    speedpicY = random(1, 5);
    pic2 = loadImage("../images/Keyboard cat.jpg");
    pic3 = loadImage("../images/Sunglasses cat.png");
    myFont = loadFont("../fonts/fonts/Sixtyfour-Regular.ttf");


    fry1speed = random(1,11);
    bottomfryspeed = random (1,11);
    top4speed = random (1,11);
    
    setInterval(changeTime, 1000);
    
   
}


function draw()
{
    colorMode(HSB)
    background(202,93,46);
   
    image(pic3, grumpX, grumpY);

    image(pic2, keyX, keyY);

    //fix this
    image(pic, imageX, imageY);
    imageX += speedpicX;
    imageY += speedpicY;
    if(imageX >= 500 || imageX <=93)
{
    speedpicX *= -1;
}

//if(imageY >= 100 || imageY <=0)
//{
    //speedpicY *= 1;
//}




    speed = random(1,11); 

    // 1st top fry  rect(60,60,30,130);
    fill(42,76,100);
    rect(60,fry1,30,130);
    fry1 += fry1speed;
    //fry1x += fry1speed;
    if( fry1 >= width )
    //if(fry1 >= 500 || fry1x <= 60)
    {
        fry1 = 60;
       
    }
    
    //2nd top fry rect(100,60,30,130);
    fill(42,76,100);
    rect(100,60,30,130);
  
    //3rd top fry moving rect(140,60,30,130);
    fill(42,76,100);
    rect(fry3,fry3y,30,130);
    fry3 += speed3;
    fry3y += speed3;
    if(fry3 >= 500 || fry3 <= 93)
    {
        speed3 *= -1;
    }

    //4th top fry  rect(180,60,30,130);
    fill(42,76,100);
    rect(180,top4,30,130);
    top4 += top4speed;
    //top4y += top4speed;
    if( top4 >= width )
    {
        top4 = 60;
    }


    //1st bottom fry  rect(80,80,30,130);
    fill(42,76,100);
    rect(x,y,30,130);

    //2nd bottom fry rect(120,80,30,130);
    fill(42,76,100);
    rect(120,80,30,130);
   

    //3rd bottom fry rect(160,80,30,130);
    fill(42,76,100);
    rect(160,80,30,130);


    fill(360,100,66);
    rect(40,150,190,250);

    fill(42,76,100);
    circle(135,260,105);

    textSize (24);
    textFont(myFont);
    text('Laurel Schmidt', 330, 880);

    textSize (24);
    text ('2000s era cats',10, 40);

    textSize (15);
    text('(Use keys)', 20,65);

    textSize (15);
    text('Plz like and share on FB LOL', 250,600);




    if(keyIsPressed)
    {
      if(key == 'a')
      {
          x-=5;
      }
  
      else if(key == 'd')
      {
          x+=5;
      }
      else if(key == 'w')
      {
          y-=5;
      }
      else if(key == 's')
      {
          y+=5;
      }
    }
    
    fill (299,100,93);
    textSize(24)
    text(myTime + " seconds", 100,450);

}


function changeTime()
{
    myTime--;
    if(myTime < 0)
    {
        myTime =10;
    }
}

//fill(42,76,100);
//rect(120,bottomfry2,30,130);
//bottomfry2 += bottomfryspeed;
//if( bottomfry2 >= width)
//{
    //bottomfry2 = -5;  
//}
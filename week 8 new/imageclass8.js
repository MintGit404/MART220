class imageClass
{

    // constructor
constructor(myFilePath, x, y, w, h)
{
    this.myFilePath = myFilePath;
    this.myImageObject = loadImage(this.myFilePath);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

}


updateX(x)
{
    this.x = x;
}

//updateY(y)
//{
//    this.y = y;
//}  


updateFlip(flipX) {
    this.flipX = flipX;
}

updateFlip(flipY) {
    this.flipY = flipY;
}
draw()
{
    //image(this.myImageObject, this.x, this.y);
    if (this.flipX) {
        // The push and pop functions save and reset the previous transformation.
        push();
        // Scale -1, 1 means reverse the x axis, keep y the same.
        scale(-1, 1);
        // Because the x-axis is reversed, we need to draw at different x position.
        image(this.myImageObject, -this.x - this.w / 2, this.y);
        pop();
    }
    else {
        image(this.myImageObject, this.x, this.y);

    }
}

    


}
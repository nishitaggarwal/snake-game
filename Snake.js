class Snake {

constructor( x, y , width , height ) {

    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;
   

    World.add(world, this.body);
}

eat(){
if (this.body.isTouching("food")){

this.body.width = this.body.width + 5
this.body.height = this.body.height + 5
food  = new food(X,Y)
}}


keyPressed() {
    if (keyCode === LEFT_ARROW) {
      //this.body.setDir(-1, 0);
      this.body.velocityX = -1
    } else if (keyCode === RIGHT_ARROW) {
      //this.body.setDir(1, 0);
      this.body.velocityX = 1
    } else if (keyCode === DOWN_ARROW) {
     // this.body.setDir(0, 1);
     this.body.velocityY = 1 
    } else if (keyCode === UP_ARROW) {
     // this.body.setDir(0, -1);
     this.body.velocityY = -1
    }
  
  }
  


display(){

    //var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    //rotate(angle);
   rectMode(CENTER);
  rect( 0, 0, this.width, this.height);
    pop();

}



}
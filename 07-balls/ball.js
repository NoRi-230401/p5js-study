class Ball{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.dx=2;
    this.dy=3;
  }
  
  drawCircle(){
    fill(255,255,0);
    ellipse(this.x,this.y,30,30);
  }
  
  moveCircle(){
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;
    
  }
  
  checkBoundary(){
    if(this.x>width || this.x <0){
      this.dx = this.dx * -1;
      
    }
    if(this.y>height || this.y <0){
      this.dy = this.dy * -1;
    }
    
    
  }
}
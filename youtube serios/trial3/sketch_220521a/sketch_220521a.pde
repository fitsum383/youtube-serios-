float r ;
float angle =0;
float time =0;
float cr;

void setup() {
  size(600, 400);
 
  r= width/6;
  cr=width/40;
    }

void draw() {
  background(200);
  translate(width/2,height/2);
  float x= r*cos(angle);
  float y =r*sin(angle);
  noFill();
  stroke(0);
  strokeWeight(2);

  ellipse(0,0,r*2,r*2);
  stroke(0,50);
  line(-r,0,r,0);
  line(0,-r,0,r);
 
  pushMatrix();
  rotate(angle);        
  fill(0,75);
  rect(cos(angle-PI/2),sin(angle-PI/2),r,r);
  popMatrix();
 
  fill(0,0,255,99);
  square(x,y,-y);
              
  fill(255,0,0,99);
  square(0,0,x);    
            
  fill(0);
  ellipse(x,y,10,10);
  stroke(0);
  strokeWeight(2);
  //radius
  line(0,0,x,y);
  
  //lable
  textSize(20);
  fill(0,0,255);
  text("square of sin(x) by sin(x)= blue",-width/2,-height/2+20);
  fill(255,0,0);
  text("square of cos(x)by cos(x)= red",(-width/2),(-height/2)+40);
  fill(100);
  text("square of radius= gray",-width/2,-height/2+60);
  


  
  angle-=0.005;

}

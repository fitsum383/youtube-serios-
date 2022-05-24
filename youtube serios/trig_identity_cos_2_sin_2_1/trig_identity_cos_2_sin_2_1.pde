float r=250;
float angle=PI/4;
 //w[];
void setup (){
size(500,500);

}
void draw(){
  background(100);
  float x= r*cos(angle);
  float y= r*sin(angle);
  translate(width/2,height/2);
  stroke(255,0,0);
  point(0,0);
  point(x,y);
  ellipse(0,0,2*r,2*r);
  line(0,0,x,y);
  stroke(0);
  
  //cross
  line(0,-r-40,0,r+40);
  line(-r-40,0,r+40,0);
  strokeWeight(3);
  line(x,0,x,y);
  stroke(0,0,255);
  
  //for(float i=0 ; i<angle;i+=0.1){
  line(0,0,x*cos(angle)*cos(angle),x*cos(angle)*sin(angle));
  fill(0,0,255);
  textSize(20);
  //text("cos^2",x*cos(i)*cos(i)/2,x*cos(i)*sin(i)/2);
  fill(200);
  angle+=0.01;

}

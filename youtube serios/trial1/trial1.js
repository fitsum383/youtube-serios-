let r ;
let angle =0;
let time =0;
let cr;
let cross;
let circle;
let ball;
let iscross=true;
let iscircle=true;
let isball=true;

function setup() {
  createCanvas(600, 400);
  cross=createButton(" cross ");
  cross.mousePressed(showCross);
  circle=createButton("circle");
  circle.mousePressed(showCircle);
  ball=createButton("ball");
  ball.mousePressed(showball);

  r= width/4;
  cr=width/40;

}

function draw() {
  background(100);
  translate(width/2,height/2)
  let x= r*cos(angle);
  let y =r*sin(angle);
    noFill();
    stroke(0);
    strokeWeight(2)
    if (iscross){
          line(-r,0,r,0);
          line(0,-r,0,r);
      }
    if (iscircle){
          ellipse(0,0,r*2);}
          // center circle
          if(isball){
          fill('blue');
          ellipse(x,y,cr,cr);
          stroke(0)
          strokeWeight(2)
          let scale=1-(cr/r)/2
          line(0,0,x*scale,y*scale)
          line(x,y,0,y);
          line(x,y,x,0);
       }
    fill('yellow')
    ellipse(x,0,cr*1.25,cr*1.25);
    fill('yellow')
    ellipse(0,y,cr*1.25,cr*1.25);

    angle-=0.02
}
function showCross(){ iscross=!iscross; }

function showCircle(){iscircle=!iscircle;}

function showball(){isball=!isball;}

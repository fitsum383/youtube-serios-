let r ;
let angle =0;
let angle2=0;
let time =0;
let cr;
let slider;
let slider2;
function setup() {
  createCanvas(600, 400);
  //slider=createSlider(0,4*PI,0,0.01);
  //slider2=createSlider(-4*PI,0,0,0.01);  

  r= width/4;
  cr=width/40;

}

function draw() {
  background(100);
  translate(width/2,height/2)
  let x= r*cos(angle);
  let y =r*sin(angle);
  let x2= r*cos(angle2);
  let y2 =r*sin(angle2);
    noFill();
    stroke(0);
    strokeWeight(2)
    
          line(-r,0,r,0);
          line(0,-r,0,r);
      

          ellipse(0,0,r*2);
          // center circle
          fill('green');
          strokeWeight(0.5)
          ellipse(x,y,cr,cr);
          //stroke('yellow')
          fill('green')
          ellipse(x2,y2,cr,cr);
          stroke(0)
          strokeWeight(2)
          let scale=1-(cr/r)/2
          line(0,0,x*scale,y*scale)
          line(x,y,0,y);
          line(x,y,x,0);
          line(0,0,x2*scale,y2*scale)
         
          line(x2,y2,0,y2);
          line(x2,y2,x2,0);
     stroke(0)
     strokeWeight(0.5)
    fill('yellow')
    ellipse(x,0,cr*1.25,cr*1.25);
    fill('yellow')
     stroke(0)
     strokeWeight(0.5)
    ellipse(0,y,cr*1.25,cr*1.25);
     fill('red')
    ellipse(0,y2,cr*1.25,cr*1.25);
    stroke('blue')
    line(0,0,0,y2)
    noFill()
    stroke('white')
      angle2-=0.001
      angle+=0.001
}

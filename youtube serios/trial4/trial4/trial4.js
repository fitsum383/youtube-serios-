let r ;
let angle =0;
let time =0;
let cr;
let cross;
let circle;
let ball;
let sinGraph;
let cosGraph;
let cosvert;
let iscross=false;
let iscircle=false;
let isball=false;
let isSinGraph=false;
let isCosGraph=false;
let isvert=false;
let si=[];
let co=[];

function setup() {
  createCanvas(windowWidth, windowHeight);
  cross=createButton(" cross ");
  cross.mousePressed(showCross);
  circle=createButton("circle");
  circle.mousePressed(showCircle);
  ball=createButton("ball");
  ball.mousePressed(showball);
  sinGraph=createButton("sin");
  sinGraph.position(0,height+30)
  sinGraph.size(80);
  sinGraph.mousePressed(showSinGraph);
  cosGraph=createButton("cos");
  cosGraph.position(0,height+60)
  cosGraph.size(40);
  cosGraph.mousePressed(showCosGraph);
  cosvert=createButton("cosvert");
  cosvert.position(50,height+60)
  cosvert.size(60);
  cosvert.mousePressed(showCosvert);


  r= width/6;
  cr=width/40;

}

function draw() {
  background(100);
  translate(width/2,height/2)
  let x= r*cos(angle);
  let y =r*sin(angle);
  si.push(y);
  co.push(x);
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
          fill('yellow');
          ellipse(x,y,cr,cr);
          stroke(0)
          strokeWeight(2)
          let scale=1-(cr/r)/2
          line(0,0,x*scale,y*scale)
          line(x,y,0,y);
          line(x,y,x,0);
       }
    if(isSinGraph){
            beginShape();
            let sintime=0;
           for(let i=0;i<si.length;i++){
              
             noFill()
             stroke(255,0,0);
             vertex(sintime,si[i])
             sintime+=0.3;
       }
            endShape();
       }
     if(isCosGraph){
             beginShape();
             let costime=0;
           for(let i=0;i<co.length;i++){
             noFill()
             stroke(0,0,255);
             vertex(costime,co[i])
             costime+=0.3;
       }
            endShape();
       }
       if(isvert){
             beginShape();
             let vert=0;
           for(let i=0;i<co.length;i++){
             noFill()
            
             stroke(0,0,255);
             vertex(co[i],vert)
             vert+=0.1;
       }
            endShape();
       }
    stroke(0);
    fill('blue')
    ellipse(x,0,cr*1.25,cr*1.25);
    fill('red')
    ellipse(0,y,cr*1.25,cr*1.25);

    angle-=0.02
}
function showCross(){ iscross=!iscross; }

function showCircle(){iscircle=!iscircle;}

function showball(){isball=!isball;}

function showSinGraph(){ isSinGraph=!isSinGraph;}

function showCosGraph(){  isCosGraph=!isCosGraph;}

function showCosvert(){  isvert=!isvert;}

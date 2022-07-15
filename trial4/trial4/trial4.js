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
let ver
let arr=[]
let slider;

function setup() {
  let canv=createCanvas(1000,1000);
  canv.parent('can-container');
  ver=createVector(0,0)


  cross=createButton(" cross ");
  cross.addClass("mybutton")
  cross.mousePressed(showCross);
  cross.parent("button_container")

  circle=createButton("circle");
  circle.addClass("mybutton")
  circle.mousePressed(showCircle);
  circle.parent("button_container")

  ball=createButton("ball");
  ball.addClass("mybutton")
  ball.mousePressed(showball);
  ball.parent("button_container")

  sinGraph=createButton("sin");
  sinGraph.addClass("mybutton")
  sinGraph.mousePressed(showSinGraph);
  sinGraph.parent("button_container")

  cosGraph=createButton("cos");
  cosGraph.addClass("mybutton")
  cosGraph.mousePressed(showCosGraph);
  cosGraph.parent("button_container")

  cosvert=createButton("cosvert");
  cosvert.addClass("mybutton")
  cosvert.mousePressed(showCosvert);
  cosvert.parent("button_container")



  let l=createElement("lable","radius =")
  l.parent("button_container")
  l.addClass("label")

  slider=createSlider(width/12,width/3,width/4,0.5)
  slider.parent("button_container");
  slider.addClass("slider")
  slider.size(300,10)
  // slider.size(150)

  cr=width/40;

}


function draw() {
  // background(124, 180, 184);
  clear()
  Style()
  translate(width/2,height/2)
  let x= r*cos(angle);
  let y =r*sin(angle);
  si.unshift(y);
  co.unshift(x);
  ver.x=x/2;
  ver.y=y/2
  arr.push(ver)
  noFill();
  stroke(255);
  strokeWeight(3.5)
  r= slider.value();
  if (iscross){
    strokeWeight(2)
        line(-r,0,r,0);
        line(0,-r,0,r);

        cross.style("color","var(--light-blue)")
        cross.style('background-color',"var(--dark)")
    }
  if (iscircle){
        ellipse(0,0,r*2);
        circle.style("color","var(--light-blue)")
        circle.style('background-color',"var(--dark)")
        line(x,0,0,y)
        beginShape()
        strokeWeight(10)
        stroke(255)
        for(let i=0;i<arr.length;i++){
          point(arr[arr.length].x,arr[arr.length].y)
        }
        strokeWeight(2)
        endShape()
        stroke(0)
        // ellipse(x/2,y/2,10,10)
    }
        // center circle
  if(isball){
        noStroke()
        fill(234, 144, 16);
        ellipse(x,y,cr,cr);
        strokeWeight(3)
        stroke(0)
        let scale=1-(cr/r)/2
        line(0,0,x*scale,y*scale)
        line(x,y,0,y);
        line(x,y,x,0);
        ball.style("color","var(--light-blue)")
        ball.style('background-color',"var(--dark)")
   }
  if(isSinGraph){
  sinGraph.style("color","var(--light-blue)")
  sinGraph.style('background-color',"var(--dark)")
        beginShape();
          let sintime=0;

         for(let i=0;i<si.length;i++){ 
            noFill()
            stroke(255,0,0);
            vertex(sintime,si[i])
            sintime+=0.3;
          }
          if(si.length>3000)si.pop()
        endShape();
      }
    if(isCosGraph){
      cosGraph.style("color","var(--light-blue)")
      cosGraph.style('background-color',"var(--dark)")
        beginShape();
          let costime=0;
            
          for(let i=0;i<co.length;i++){
            noFill()
            stroke(0,0,255);
            vertex(costime,-co[i])
            costime+=0.3;
            }  
          push()
          stroke(255)
          line(x,0,0,-co[0])
          pop()

        endShape();
      }
      if(isvert){
        cosvert.style("color","var(--light-blue)")
        cosvert.style('background-color',"var(--dark)")
          beginShape();
            let vert=0;
            for(let i=0;i<co.length;i++){
              noFill()
              stroke(0,0,255);
              vertex(co[i],vert)
              vert+=0.3;
          }
          endShape();
      }

  noStroke();
  fill('blue')
  ellipse(x,0,cr*1.25,cr*1.25);
  fill('red')
  ellipse(0,y,cr*1.25,cr*1.25);
  angle-=0.02
  
}
function Style(){

 cross.style("color","var(--dark)")
 cross.style('background-color',"var(--light-blue)")

 circle.style("color","var(--dark)")
 circle.style('background-color',"var(--light-blue)")

 ball.style("color","var(--dark)")
 ball.style('background-color',"var(--light-blue)")

 sinGraph.style("color","var(--dark)")
 sinGraph.style('background-color',"var(--light-blue)")

 cosGraph.style("color","var(--dark)")
 cosGraph.style('background-color',"var(--light-blue)")

 cosvert.style("color","var(--dark)")
 cosvert.style('background-color',"var(--light-blue)")
}

function showCross(){ 
  iscross=!iscross;
 }

function showCircle(){
  iscircle=!iscircle;
}

function showball(){
  isball=!isball;
}

function showSinGraph(){ 
  isSinGraph=!isSinGraph;
}

function showCosGraph(){  
  isCosGraph=!isCosGraph;
}

function showCosvert(){ 
  isvert=!isvert;
}

let r ;
let angle =0;
let time =0;
let cr;
let slider;
let makeSlider;
let makeRotate;
let input;
let isSlider=false;
let isRotate=false;
let isInput=false;
  function setup() {
    createCanvas(600,600);
    
    slider=createSlider(0,4*PI,0,0.01);
    slider.size(250,10);
    
    makeSlider=createButton("makeSlider");
    makeSlider.position(0,height+20);
    makeSlider.mousePressed(showBySlider);
    
    makeRotate=createButton("makeRotate");
    makeRotate.position(0,height+40);
    makeRotate.mousePressed(Rotate)
    
    input=createInput("0");
    input.position(0,height+60);
    
    r= width/8;
    cr=width/40;
  
  }
  
  function draw() {
      background(180);
      translate(width/2,height/2);
      let x= r*cos(angle);
      let y =r*sin(angle);
      noFill();
      stroke(0);
      strokeWeight(2);
    
      ellipse(0,0,r*2);
      fill(255);
      ellipse(x,y,5);
     
      //cross
      line(-r,0,r,0);
      line(0,-r,0,r);
    
      stroke(0)
      line(0,0,x,y);
      fill(0);
           push();
      rotate(angle);   
      fill(0,75);
      noStroke()
      rect(cos(angle-PI/2),sin(angle-PI/2),r,r);
          pop();
    
      //tan
      stroke('white');
      text("tan",(x+(r*r)/x)/2,y/2);
      push();
      fill(0,0,255,75);
      rotate(angle);
      noStroke();
      square(r,0,-r*y/x)
      pop();
    
      //sec
      fill(255,0,0,75);
      //line(0,0,r*r/x,0);
      text('sec',((r*r)/x)/2,0);
      noStroke()
      square(0,0,r*r/x);
    
      if(isSlider && !isRotate){ angle=slider.value(); }
        
      else if(isRotate && !isSlider){ angle+=0.01; }
      
      else{angle=radians(float(input.value()))}
  
  }
  function showBySlider(){
     isSlider=!isSlider
  }
  function Rotate(){
     isRotate=!isRotate
  }

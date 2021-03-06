let r 
let angle =0
let time =0
let cr
let slider
let rotate
let boolR=false
let boolS=false
let slider2
let input_box
let sliderB

let light_blue
let dark
let silent
let purple
let mid_gray
let carrot
let blue
let red

function setup() {
  let can=createCanvas(1000, 1000)
  can.parent("can")

  sliderB=createButton("change to slider")
  sliderB.addClass("button")
  sliderB.parent("box")
  sliderB.mousePressed(()=>boolS=!boolS)

  let label=createElement("label","angel =")
  label.addClass("label")
  label.parent("box")

  slider=createSlider(0,4*PI,0,0.01)
  slider.addClass("slider")
  slider.parent("box")
  slider.size(250,10)

  rotate=createButton("rotate")
  rotate.mousePressed(()=>boolR=!boolR)
  rotate.addClass("button")
  rotate.parent("box")

  light_blue=color(112, 248, 186)
  dark=color(30, 16, 20)
  silent=color(124, 180, 184)
  purple=color(202, 60, 255)
  mid_gray=color(8, 76, 97)
  carrot=color(234, 144, 16)
  blue= color(0, 79, 255)
  red= color(255, 32, 110)

  let label2=createElement("label","zoom =")
  label2.addClass("label")
  label2.parent("box")

  slider2=createSlider(width/10,width/2,width/4)
  slider2.addClass("slider")
  slider2.parent("box")
  slider2.size(250,10)

  input_box=createInput("0")
  input_box.addClass("label")
  input_box.parent("box")



  cr=width/40

}

function draw() {
  // background(124, 180, 184)
  clear()
  r= slider2.value()
  Style()
  translate(width/2,height/2)
  let x= r*cos(angle)
  let y =r*sin(angle)
  noFill()
  stroke(0)
  strokeWeight(2)

  ellipse(0,0,r*2)
  textSize(40)
  line(-width,0,width,0)
  line(0,-height,0,height)

  stroke(0)
  strokeWeight(4)
  line(0,0,x,y)

  //tan
  stroke('blue')
  line(x,y,(y*y+x*x)/x,0)
  fill(255)
  text("tan",(x+(y*y+x*x)/x)/2,y/2)
  //cot
  stroke('red')
  line(0,((-x*(-x)/y)+y),x,y)
  text('cot',x/2,(((-x*(-x)/y)+y)+y)/2)
  //csc
  stroke(red)
  line(0,0,0,((-x*(-x)/y)+y))
  text('csc',0,((-x*(-x)/y)+y)/2)
  //sec
  stroke(blue)
  line(0,0,(y*y+x*x)/x,0)
  text('sec',((y*y+x*x)/x)/2,0)
  //sin
  stroke(red)
  line(x,y,x,0)
  text('sin',x,y/2)
  //cos
  stroke(blue)
  line(x,y,0,y)
  text('cos',x/2,y)
  //arc
  noFill()
  stroke(255)
  arc(0,0,100,100,angle,0)
    
  if(boolR){
    time-=0.01
    angle=map(time,0,10,0,2*PI)
    rotate.style("color",light_blue)  
    rotate.style("background-color",dark)
  }
  else if(boolS){
    angle=-1*slider.value()
    sliderB.style("color",light_blue)
    sliderB.style("background-color",dark)
  }
  else{angle=radians(-1*input_box.value())}

  fill(dark)
  textSize(50)
  text('angle =',-width/2+30,-height/2+50)
  let anglev=round(degrees(-1*angle))
  while(anglev<0 || anglev>360){
    if(anglev<0)anglev+=360
    if(anglev>360)anglev-=360
  }
  text(anglev,-width/2+width/4.3,-height/2+50)
  text("??",-width/2+width/3.1,-height/2+50)
  textSize(25)
  fill(0)
  text(anglev,50*cos(radians(-1*anglev/2)),50*sin(radians(-1*anglev/2)))

}
function Style(){
  rotate.style("background-color",light_blue)  
  rotate.style("color",dark)
  sliderB.style("background-color",light_blue)
  sliderB.style("color",dark)
}
let angle =[]
let r=10
let circles=[]
let total;
let angleV=[]
let amplituide
let slidera
let sliderv
let sliderp
let Random 
let slidermode
let bool=false
let boolr=false
let period
function setup() {
  let can=createCanvas(1000,1000);
  can.parent("box")
   total=floor(width/r)-1
   let label=createElement("label",'amplitude =')
   label.addClass('label')
   label.parent("buttonbox")

   slidera=createSlider(height/9,height,height/3,0.05)
   slidera.addClass('s')
   slidera.parent("buttonbox")
   slidera.size(300,5)
   
   slidermode=createButton("change to slider mode")
   slidermode.mousePressed(()=>bool=!bool)
   slidermode.addClass("button")
   slidermode.parent("buttonbox")

   let label2=createElement("label",'angular velocity=')
   label2.addClass('label')
   label2.parent("buttonbox")

   sliderv=createSlider(0,1,0.2,0.005)
   sliderv.addClass('s')
   sliderv.parent("buttonbox")
   sliderv.size(250,5)

   Random=createButton("Random angular velocity")
   Random.mousePressed(()=>boolr=!boolr)
   Random.addClass("button")
   Random.parent("buttonbox")

   let label3=createElement("label",'period(T) =')
   label3.addClass('label')
   label3.parent("buttonbox")
   
   sliderp=createSlider(1,20,7,0.05)
   sliderp.addClass('s')
   sliderp.parent("buttonbox")
   sliderp.size(300,5)

   for(let i=0;i<total ;i++){
     let index=map(i,0,total,0,4*PI);
     angle[i]=index;
     angleV[i]=0.02
   } 
}
function draw() {
  clear()
  translate(width/2,height/2);
  amplituide=slidera.value()
  period=sliderp.value()
  for(let i=0;i<angle.length;i++){
    let y=sin((TWO_PI/period)*angle[i])*amplituide
    
    stroke(255-y,0,y);
    fill(255,0,y);
    let x=map(i,0,total-1,-width,width);
    line(x,0,x,y);
    noStroke()
    circle(x,y,r*2);
    if(bool){angle[i]+=sliderv.value()}
    else if(boolr){ angle[i]+=i/1000}
    else{
      angle[i]+=angleV[i]
    }
    
  }
  
  
}

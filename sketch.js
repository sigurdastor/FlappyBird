function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  noStroke()
}

    //variables
  var gameOver = false;
  var playing = false;
  var menu = true;
  var jumpTimer = 10;
  var wing = false;
  var wingTimer = 0;
  var i;
  var n;
  var p;
  var x = 150;
  var y = 150;
  var xPipe = 200;
  var yPipe = 400;
  var xGround = 0;
  var yGround = 0;
  var pipeW = 40;  
  var g = 360;
  var size = 1.5;
  var shade;
  var difShade = 0;  
  var poeng = 0;
  var highScore;
  var y1;
  var y2;
  var y3;
  var y4;

    var yt1 = 150;
    var yb1 = 250;
    var yt2 = 200;
    var yb2 = 300;
    var yt3 = 50;
    var yb3 = 150;
    var yt4 = 100;
    var yb4 = 200;
    var yt5 = 20;
    var yb5 = 120;
    var yt6 = 40;
    var yb6 = 140;
    var yt7 = 70;
    var yb7 = 170;
    var yt8 = 160;
    var yb8 = 260;
    var yt9 = 60;
    var yb9 = 160;
    var yt10 = 110;
    var yb10 = 210;

gameMenu = function(){
  shade = 0;
  fill(0,0,255)
  rect(100,130,200,70)
  rect(110,120,180,90)
  ellipse(110,130,20,20)
  ellipse(110,200,20,20)
  ellipse(290,130,20,20)
  ellipse(290,200,20,20)
  
  rect(100,250,200,30)
  rect(110,240,180,50)
  ellipse(110,250,20,20)
  ellipse(110,280,20,20)
  ellipse(290,250,20,20)
  ellipse(290,280,20,20)
  fill(difShade)
  textSize(35)
  text("Difficulty",137.5,280)
  
  if(mouseX > 100 && mouseX < 300 && mouseY > 240 && mouseY < 290){
  
  }
  
  
  if(mouseX > 100 && mouseX < 300 && mouseY > 120 && mouseY < 210){
    shade = 300; 
    fill(300)
    rect(100,130,2.5,70)
    rect(297.5,130,2.5,70)
    rect(110,120,180,2.5)
    rect(110,207.5,180,2.5)
  fill(300)
  ellipse(110,130,20,20)
  ellipse(110,200,20,20)
  ellipse(290,130,20,20)
  ellipse(290,200,20,20)
  
  fill(0,0,300)
  ellipse(112.5,132.5,20,20)
  ellipse(112.5,197.5,20,20)
  ellipse(287.5,132.5,20,20)
  ellipse(287.5,197.5,20,20)
    
    if(mouseIsPressed === true){
      menu = false;
      playing = true;
    }
    
  }
  textSize(60)
  fill(shade)
  text("PLAY",125,182.5)
}  


bakGrunn = function(){
  background(0,200,300)
  fill(300)
  ellipse(30,360,100,100)
  ellipse(75,340,25,25)
  ellipse(110,340,25,25)
  ellipse(95,380,60,120)
  ellipse(50,380,100,100)
  ellipse(200,350,25,25)*
  ellipse(140,365,70,100)
  ellipse(230,360,150,100)
  ellipse(300,360,50,50)
  ellipse(350,340,90,70)
  ellipse(390,350,50,50)
  rect(0,350,400,50)
}
flappyBird = function(s,x,y){
 //WHITE

  
  //BLACK
  fill(0)
  rect(x,y,s*6,s)
  rect(x-s*2,y+s,s*9,s)
  rect(x-s*3,y+s*2,s*11,s)
  rect(x-s*4,y+s*3,s*13,s)
  rect(x-s*5,y+s*4,s*14,s*2)
  rect(x-s*5,y+s*6,s*15,s)
  rect(x-s*4,y+s*7,s*15,s)
  rect(x-s*4,y+s*8,s*14,s*2)
  rect(x-s*3,y+s*10,s*12,s)
  rect(x-s,y+s*11,s*5,s)
  
  //RED
  
  fill(220,0,0)
  rect(x+s*4,y+s*7,s*6,s)
  rect(x+s*3,y+s*8,s,s)
  rect(x+s*4,y+s*9,s*5,s)
    
  //ORANGE
  
  fill(220,150,0)
  rect(x-s,y+s*8,s*3,s)
  rect(x-s*3,y+s*9,s*6,s)
  rect(x-s,y+s*10,s*5,s)

  //WHITE
  fill(255)
  rect(x-s*2,y+s*2,s*2,s)
  rect(x,y+s,s*3,s)
  rect(x+s*4,y+s,s*2,s)
  rect(x+s*3,y+s*2,s*4,s)
  rect(x+s*3,y+s*3,s*3,s*2)
  rect(x+s*4,y+s*5,s*3,s)
  rect(x+s*7,y+s*3,s,s*3)
  
  //YELLOW
  fill(255,255,100)
 
  rect(x,y+s*7,s*3,s)
  rect(x+s,y+s*6,s*3,s)
  rect(x+s,y+s*5,s*2,s)
  rect(x,y+s*4,s*2,s)
  rect(x-s,y+s*3,s*3,s)
  rect(x,y+s*2,s*2,s)

  //WING
  
  if(wing === true){
  
    //white
    fill(255)
  rect(x-s*5,y+s*4,s*4,s)   
    rect(x-s*5,y+s*5,s*5,s*2)   
    
    //black
    fill(0)
    rect(x-s*5,y+s*3,s,s)
    rect(x-s*6,y+s*4,s,s*3)
    rect(x-s*5,y+s*7,s,s)

    
  //yellow
  fill(255,255,100)
  rect(x-s*4,y+s*7,s*3,s)
  rect(x-s*5,y+s*6,s,s)
  rect(x-s,y+s*6,s,s)
  }else{
    //yellow
    fill(255,255,100)
    rect(x,y+s*5,s,s*2)
    rect(x-s*4,y+s*4,s*5,s*3)
    rect(x-s*3,y+s*3,s*4,s*5)
    //orange
    fill(220,150,0)
    rect(x-s*3,y+s*8,s*4,s)
  }
}

jump = function(){
  
  if(mouseIsPressed && jumpTimer < 1){
  y = y - 25;
    jumpTimer = jumpTimer + 15;
  }
 if(jumpTimer < 10){
 } 
}

pipes = function(){
  fill(0,100,0)
  
  rect(xPipe+200,0,pipeW,yt1)
  rect(xPipe+200,yb1,pipeW,g-yb1)
  rect(xPipe+400,0,pipeW,yt2)
  rect(xPipe+400,yb2,pipeW,g-yb2)
  rect(xPipe+600,0, pipeW ,yt3)
  rect(xPipe+600,yb3,pipeW,g-yb3)
  rect(xPipe+800,0,pipeW,yt4)
  rect(xPipe+800,yb4,pipeW,g-yb4)
  rect(xPipe+1000,0,pipeW,yt5)
  rect(xPipe+1000,yb5,pipeW,g-yb5)
  rect(xPipe+1200,0,pipeW,yt6)
  rect(xPipe+1200,yb6,pipeW,g-yb6)
  rect(xPipe+1400,0,pipeW,yt7)
  rect(xPipe+1400,yb7,pipeW,g-yb7)
  rect(xPipe+1600,0,pipeW,yt8)
  rect(xPipe+1600,yb8,pipeW,g-yb8)
  rect(xPipe+1800,0,pipeW,yt9)
  rect(xPipe+1800,yb9,pipeW,g-yb9)
  rect(xPipe+2000,0,pipeW,yt10)
  rect(xPipe+2000,yb10,pipeW,g-yb10)
  
  
  
}

animertBakgrunn = function(){
  fill(0)
rect(xGround, yGround +360,1000,2);
  fill(200,255,200)
rect(xGround, yGround +362,1000,2);
  fill(0,255,0)
  rect(xGround, yGround +364,1000,8);
  fill(0,150,0)
  rect(xGround, yGround +372,1000,2);
  fill(210,105,30)
  rect(xGround, yGround +374,1000,26);
  fill(0,100,0)
  for(i = 0; i < 1000;i = i + 20){
    rect(xGround+5+i,yGround+370,10,2)
    rect(xGround+8+i,yGround+368,10,2)
    rect(xGround+11+i,yGround+366,10,2)
    rect(xGround+14+i,yGround+364,10,2)
  }

  
  
}

function draw() { 

  
  bakGrunn();
  if(menu === true){
  
  gameOver = false;
    playing = false;
  gameMenu()
  }

animertBakgrunn(xGround,yGround);

  
  if(x > xPipe+200 && x < xPipe+200+pipeW && y+12*size > yb1){
    gameOver = true;
  }
    if(x > xPipe+200 && x < xPipe+200+pipeW && y < yt1){
    gameOver = true;
  }
  if(x > xPipe+400 && x < xPipe+400+pipeW && y+12*size > yb2){
    gameOver = true;
  }
    if(x > xPipe+400 && x < xPipe+400+pipeW && y < yt2){
    gameOver = true;
  }
    if(x > xPipe+600 && x < xPipe+600+pipeW && y+12*size > yb3){
    gameOver = true;
  }
    if(x > xPipe+600 && x < xPipe+600+pipeW && y < yt3){
    gameOver = true;
    }
    if(x > xPipe+800 && x < xPipe+800+pipeW && y+12*size > yb4){
    gameOver = true;
  }
    if(x > xPipe+800 && x < xPipe+800+pipeW && y < yt4){
    gameOver = true;
  }
    if(x > xPipe+1000 && x < xPipe+1000+pipeW && y+12*size > yb5){
    gameOver = true;
  }
    if(x > xPipe+1000 && x < xPipe+1000+pipeW && y < yt5){
    gameOver = true;
  }
    if(x > xPipe+1200 && x < xPipe+1200+pipeW && y+12*size > yb6){
    gameOver = true;
  }
    if(x > xPipe+1200 && x < xPipe+1200+pipeW && y < yt6){
    gameOver = true;
  }
     if(x > xPipe+1400 && x < xPipe+1400+pipeW && y+12*size > yb7){
    gameOver = true;
  }
    if(x > xPipe+1400 && x < xPipe+1400+pipeW && y < yt7){
    gameOver = true;
  }
     if(x > xPipe+1600 && x < xPipe+1600+pipeW && y+12*size > yb8){
    gameOver = true;
  }
    if(x > xPipe+1600 && x < xPipe+1600+pipeW && y < yt8){
    gameOver = true;
  }
     if(x > xPipe+1800 && x < xPipe+1800+pipeW && y+12*size > yb9){
    gameOver = true;
  }
    if(x > xPipe+1800 && x < xPipe+1800+pipeW && y < yt9){
    gameOver = true;
  }
     if(x > xPipe+2000 && x < xPipe+2000+pipeW && y+12*size > yb10){
    gameOver = true;
  }
    if(x > xPipe+2000 && x < xPipe+2000+pipeW && y < yt10){
    gameOver = true;
  }
  if(x > xPipe+200 && playing === true){
    if(poeng < 200){
    poeng = 200;
    }
    poeng = poeng + 1;
    
  }
  
  fill(0)
  if(playing === true)
  text(floor(poeng/200),180,200);
  
   if(gameOver === true){
     menu = true;
     xPipe = 200;
     
       highScore = (floor(poeng/200)-1);
     poeng = 0;
     y = 150;
 //    playing = false;
  }
  textSize(15)
 text("Highscore: "+highScore,20,20)
  
  
  xGround = xGround -1; 
  
  if(xPipe < -1600){
    xPipe = 200;
    
  }
  
  if(xGround < -600){
    xGround = 0;
  }

  if(xGround === -200){
    y1 = random(0,200)}
  
  if(xGround === -400){
    y2 = random(0,200)}
  
  if(xGround === -600){
    y3 = random(0,200)}
  
   if(xGround === -800){
    y4 = random(0,200)
   }
    wingTimer += 1;
if(wingTimer > 15)
{
  wingTimer = 0;
}
  if(wingTimer > 7){
    wing = true;
  }else{
wing = false;
}
  
  
if(playing === true){
  xPipe = xPipe - 1;
  flappyBird(size,x,y)
  
  pipes(xPipe,y1);
  
  pipes(xPipe +200 ,y2);
  
  pipes(xPipe +400,y3);
  
 if(jumpTimer < 1){
   
   y = y +2;
    }
}
 jump()  
if(jumpTimer > 0){
  jumpTimer = jumpTimer -1;
}
}
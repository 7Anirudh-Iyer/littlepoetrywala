var logo,logo1
var block
var block1
var start
var b1,b2,b3,b4
var p1,p2,p3,p4,p5,p6,p7,p8,p9,p10
var poemsread,poemsread1
var poems,poem1
var pfacts1,pfacts
var page
var q
var gameState='start'


function preload(){
  logo1=loadImage("Logo.png")
  poem1=loadImage("poems.png")
  pfacts1=loadImage("pfacts.png")
  poemsread1=loadImage("poemsread.png")
}
function setup(){
  createCanvas(windowWidth,windowHeight)

push()
  page()

  block=createSprite(windowWidth/2,windowHeight/2,500,500)
    block.shapeColor="black"
    block.velocityX=4

pop()

page=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight+100)
page.visible=false
page.shapeColor="black"


b1=createSprite(windowWidth/8,0,windowWidth/4,150)
b2=createSprite(b1.x+windowWidth/4,0,windowWidth/4,150)
b3=createSprite(b2.x+windowWidth/4,0,windowWidth/4,150)
b4=createSprite(b3.x+windowWidth/4,0,windowWidth/4,150)

poems=createSprite(b1.x,b1.y+b1.height/4,10,10)
poems.scale=0.25
poems.addImage("a",poem1)
poems.visible=false

pfacts=createSprite(b2.x,b2.y+b2.height/4,10,10)
pfacts.addImage("b",pfacts1)
pfacts.scale=0.15
pfacts.visible=false

poemsread=createSprite(b3.x,b3.y+b3.height/4,10,10)
poemsread.addImage("c",poemsread1)
poemsread.scale=0.15
poemsread.visible=false

b1.visible=false
b2.visible=false
b3.visible=false
b4.visible=false



p1=createSprite(windowWidth/2,b1.height/2+30,windowWidth,windowHeight/10)
q=p1.height/2+20
p2=createSprite(windowWidth/2,p1.y+q,windowWidth,windowHeight/10)
p3=createSprite(windowWidth/2,p2.y+q,windowWidth,windowHeight/10)
p4=createSprite(windowWidth/2,p3.y+q,windowWidth,windowHeight/10)
p5=createSprite(windowWidth/2,p4.y+q,windowWidth,windowHeight/10)
p6=createSprite(windowWidth/2,p5.y+q,windowWidth,windowHeight/10)
p7=createSprite(windowWidth/2,p6.y+q,windowWidth,windowHeight/10)
p8=createSprite(windowWidth/2,p7.y+q,windowWidth,windowHeight/10)
p9=createSprite(windowWidth/2,p8.y+q,windowWidth,windowHeight/10)
p10=createSprite(windowWidth/2,p9.y+q,windowWidth,windowHeight/10)

p1.visible=false
p2.visible=false
p3.visible=false
p4.visible=false
p5.visible=false
p6.visible=false
p7.visible=false
p8.visible=false
p9.visible=false
p10.visible=false

}

function draw(){
  background(0)

  if(frameCount>0){
    drawSprites()
  }

  if(frameCount===130&&gameState==='start'){
    block.x=windowWidth/2
    block.velocityX=0
    gameState="play"

    drawSprites()
  }

  //opening page
{
  if(gameState==='play'){

  b1.shapeColor="orange"
  b2.shapeColor="red"
  b3.shapeColor="green"
  b4.shapeColor="cyan"

  poems.visible=true
  pfacts.visible=true
  poemsread.visible=true

  b1.visible=true
  b2.visible=true
  b3.visible=true
  b4.visible=true



  /*
  for(var i=windowHeight/4+45;i<windowHeight/4+110;i=i+20){
    fill("lightred")
    ellipse(windowWidth/6-20,i,10)
  }

  for(var i=windowHeight/4+155;i<windowHeight/4+200;i=i+20){
    fill("lightgreen")
    ellipse(windowWidth/6-20,i,10)
  }
  */

 if(keyWentDown("a")||mouseWentDown()){
  gameState='poetrysection' 
}

 if(keyDown("b")){
   gameState='quizsection'
 }

  drawSprites()

  fill("orange")
  textSize(25)
  text("Welcome to the littlepoetrywala app!!",windowWidth/8,windowHeight/4)

  fill("blue")
  textSize(15)
  text("Here is a world bent on spreading the wonders of literature!",windowWidth/6,windowHeight/4+50)
  text("Here you can acces all the poems without any need to access",windowWidth/6,windowHeight/4+50+20)
  text("our website.",windowWidth/6,windowHeight/4+50+40)
  text("But that does not mean you stop viewing our website!",windowWidth/6,windowHeight/4+110)

  fill("green")
  text("Enjoy free access to quizzes, fun-facts and many more.",windowWidth/6,windowHeight/4+160)
  text("Figure out how much you know about poetry and its fascinating many types",windowWidth/6,windowHeight/4+180)
  text("Find out how to wake up the poet in you",windowWidth/6,windowHeight/4+200)

  fill("cyan")
  text("And yes, if you are someone who loves writing poetry, ",windowWidth/6,windowHeight/4+290)
  text("Get inspired ! You can also see some wonderful poems by famous poets.",windowWidth/6,windowHeight/4+250)
  text("This is heaven for poetry lovers",windowWidth/6,windowHeight/4+270)
  text("here is a portal where you can submit your poetry.",windowWidth/6,windowHeight/4+310)

  }
}

  //poetrysection
{
  if(gameState==='poetrysection'){
    page.shapeColor='white'
    page.visible=true

    p1.visible=true
    p2.visible=true
    p3.visible=true
    p4.visible=true
    p5.visible=true
    p6.visible=true
    p7.visible=true
    p8.visible=true
    p9.visible=true
    p10.visible=true

    p1.shapeColor=30
    p2.shapeColor=30
    p3.shapeColor=30
    p4.shapeColor=30
    p5.shapeColor=30
    p6.shapeColor=30
    p7.shapeColor=30
    p8.shapeColor=30
    p9.shapeColor=30
    p10.shapeColor=30

    if(keyDown("2")){
      gameState='play'
      page.visible=false   
      p1.visible=false
      p2.visible=false
      p3.visible=false
      p4.visible=false
      p5.visible=false
      p6.visible=false
      p7.visible=false
      p8.visible=false
      p9.visible=false
      p10.visible=false
    }

    if(keyWentDown("1")||mouseWentDown()){
       gameState='p1'
    }
    
    drawSprites()


    textSize(30)
    fill("cyan")
    text("a. Rules and Laws - By Anirudh Iyer",windowWidth/9,p1.y)
    text("b. Hope - By Anirudh Iyer",windowWidth/9,p2.y)
    text("c. Understanding - By Anirudh Iyer",windowWidth/9,p3.y)
    text("d. Joy - By Anirudh Iyer",windowWidth/9,p4.y)
    text("e. Laughter - By Anirudh Iyer",windowWidth/9,p5.y)
    text("f. A Critique of Humanity - By Anirudh Iyer",windowWidth/9,p6.y)
    text("g. A seed - By Anirudh Iyer",windowWidth/9,p7.y)
    text("h. Old is Gold - By Anirudh Iyer",windowWidth/9,p8.y)
    text("i. There is no light without darkness - By Anirudh Iyer",windowWidth/9,p9.y)
    text("j. One life - By Anirudh Iyer",windowWidth/9,p10.y)
  }
}

if(gameState==='p1'){
  textSize(15)
  page.shapeColor="black"
  page.visible=false   
      p1.visible=false
      p2.visible=false
      p3.visible=false
      p4.visible=false
      p5.visible=false
      p6.visible=false
      p7.visible=false
      p8.visible=false
      p9.visible=false
      p10.visible=false
  fill("cyan")
  textSize(25)
  text("Rules and Laws- by Anirudh Iyer",windowWidth/6,page.y-170)

  textSize(11)
  text("Oh! The rules and laws,",windowWidth/6,page.y-130)
  text("Aren’t they an abandoned cause,",windowWidth/6,page.y-120)
  text("Restrictions of the society,",windowWidth/6,page.y-110)
  text("Towards them, we lack piety.",windowWidth/6,page.y-100)
  text("Do we even practice what we preach,",windowWidth/6,page.y-80)
  text("Anger is outlasted by speech,",windowWidth/6,page.y-70)
  text("Yet everyday a child is thrashed,",windowWidth/6,page.y-60)
  text("Everyday a rule is trashed.",windowWidth/6,page.y-50)
  text("Every time a person is sent to gaol,",windowWidth/6,page.y-30)
  text("No one did wonder,",windowWidth/6,page.y-20)
  text("How can justice be in our control,",windowWidth/6,page.y-10)
  text("A life was sent away in soundless thunder.",windowWidth/6,page.y-0)
  text("How do we get to decide,",windowWidth/6,page.y+20)
  text("Who will live and who will die,",windowWidth/6,page.y+30)
  text("Who gave us the right,",windowWidth/6,page.y+40)
  text("Who gave us this emblazoned might.",windowWidth/6,page.y+50)
  text("Who decides good and bad,",windowWidth/6,page.y+70)
  text("Who decides happy or sad,",windowWidth/6,page.y+80)
  text("Who created these rules,",windowWidth/6,page.y+90)
  text("Who are these fools?",windowWidth/6,page.y+100)
  text("Who gave them the spotlight,",windowWidth/6,page.y+120)
  text("Everyone has free will,",windowWidth/6,page.y+130)
  text("No one can suppress with might,",windowWidth/6,page.y+140)
  text("It’s not justice, it’s a standstill.",windowWidth/6,page.y+150)
  text("Stereotyping and discriminating,",windowWidth/6,page.y+170)
  text("Extrapolating and cage-creating,",windowWidth/6,page.y+180)
  text("Why are these sentences blistered with flaws,",windowWidth/6,page.y+190)
  text("Why rules, why laws.",windowWidth/6,page.y+200)

}

  //quizsection
  {
  if(gameState==='quizsection'){
    if(keyDown("1")){
      gameState='play'
    }
    if(keyDown("space")||mouseWentDown()){
      gameState='q'
    }

    drawSprites()
    textSize(30)
    fill("white")
    text("Welcome To the Quiz Section",50,windowWidth/6)
    textSize(20)
    text("Here you will have to answer 5 questions to win",50,windowWidth/4)
    text("Be aware there is also a Timer!",50,windowWidth/3.3)
    text("Press 'space' to begin!",50,windowWidth/2.7)

  }

  if(gameState==='q'){

    if(keyDown("a")||keyDown("b")||keyDown("d")){
      gameState='q2'
    }

    drawSprites()
    textSize(30)
    fill("cyan")
    text("How many lines does a limerick have?",windowWidth/6,windowWidth/5)
    textSize(20)
    text("a. 1",windowWidth/6,windowWidth/4)
    text("b. 4",windowWidth/6,windowWidth/4+30)
    text("c. 5",windowWidth/6,windowWidth/4+60)
    text("d. 3",windowWidth/6,windowWidth/4+90)

    if(keyDown('c')){
      gameState='good'
    }
  }

  if(gameState==='good'){
    con()
    drawSprites()
    fill("green")
    textSize(20)
      text("c. 5",windowWidth/6,windowWidth/4+60)
    if(keyDown("1")||mouseWentDown()){
      gameState='q2'
    }
  }

  if(gameState==='q2'){

    if(keyDown("a")||keyDown("b")||keyDown("c")){
      gameState='q2'
    }

    drawSprites()
    textSize(30)
    fill("cyan")
    text("What rhyme scheme does a terza rima have?",windowWidth/6,windowWidth/5)
    textSize(20)
    text("a. AABB",windowWidth/6,windowWidth/4)
    text("b. ABAB",windowWidth/6,windowWidth/4+30)
    text("c. free",windowWidth/6,windowWidth/4+60)
    text("d. interlocking",windowWidth/6,windowWidth/4+90)

    if(keyDown('d')){
      gameState='good1'
    }
  }
  if(gameState==='good1'){
    con()
    drawSprites()
    fill("green")
    textSize(20)
      text("d. interlocking",windowWidth/6,windowWidth/4+90)
    if(keyDown("1")||mouseWentDown()){
      gameState='q3'
    }
  }

  if(gameState==='q3'){

    if(keyDown("d")||keyDown("b")||keyDown("c")){
      gameState='q4'
    }

    drawSprites()
    textSize(30)
    fill("cyan")
    text("What was one of Shakesphere's most famous type of poetry?",windowWidth/6,windowWidth/5)
    textSize(20)
    text("a. sonnet",windowWidth/6,windowWidth/4)
    text("b. limerick",windowWidth/6,windowWidth/4+30)
    text("c. free verse",windowWidth/6,windowWidth/4+60)
    text("d. anaphora",windowWidth/6,windowWidth/4+90)

    if(keyDown('a')){
      gameState='good2'
    }
  }
  if(gameState==='good2'){
    con()
    drawSprites()
    fill("green")
    textSize(20)
     text("a. sonnet",windowWidth/6,windowWidth/4)
    if(keyDown("1")||mouseWentDown()){
      gameState='q4'
    }
  }

  if(gameState==='q4'){

    if(keyDown("d")||keyDown("a")||keyDown("c")){
      gameState='q5'
    }

    drawSprites()
    textSize(30)
    fill("cyan")
    text("Who is the author of Jabberwocky?",windowWidth/6,windowWidth/5)
    textSize(20)
    text("a. Roald Dahl",windowWidth/6,windowWidth/4)
    text("b. Lewis Carrol",windowWidth/6,windowWidth/4+30)
    text("c. Dan Brown",windowWidth/6,windowWidth/4+60)
    text("d. it is not a poem",windowWidth/6,windowWidth/4+90)

    if(keyDown('b')){
      gameState='good3'
    }
  }
  if(gameState==='good3'){
    con()
    drawSprites()
    fill("green")
    textSize(20)
    text("b. Lewis Carrol",windowWidth/6,windowWidth/4+30)
    if(keyDown("1")||mouseWentDown()){
      gameState='q5'
    }
  }

  if(gameState==='q5'){

    drawSprites()
    textSize(30)
    fill("cyan")
    text("Who wrote famous book: War and Peace?",windowWidth/6,windowWidth/5)
    textSize(20)
    text("a. C.S. Lewis",windowWidth/6,windowWidth/4)
    text("b. Lewis Carrol",windowWidth/6,windowWidth/4+30)
    text("c. Leo tolstoy",windowWidth/6,windowWidth/4+60)
    text("d. Shakesphere",windowWidth/6,windowWidth/4+90)

    if(keyDown('c')){
      gameState='good4'
    }
  }
  if(gameState==='good4'){
    con()
    drawSprites()
    fill("green")
    textSize(20)
    text("c. Leo tolstoy",windowWidth/6,windowWidth/4+60)
    text("Well done and Happy Birthday Ammu!!",windowWidth/6,windowWidth/4+160)
    if(keyDown("1")||mouseWentDown()){
      gameState='quizsection'
    }
  }
}



}
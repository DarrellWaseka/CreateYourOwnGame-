var StevenHealth = 20;
var score = 0;

function preload()
{
      bgimg=loadImage("Images/bgimg.jpg")
      stevenAnimation=loadImage("Images/steve2.png")
      jasperImage = loadImage("Images/jasper.png")
      cookieImage = loadImage("Images/cookie.png");
      fireImage = loadAnimation("Images/finalfire1.png","Images/finalfire2.png")
}

function setup() 
{
      createCanvas(1280,650);
      steven = createSprite(681, 444, 50, 50);
      jasper = createSprite(243, 472, 60, 60)
      
      steven.addImage("Steven1",stevenAnimation)
      jasper.addImage("jasper", jasperImage)
      cookiesgroup = new Group()
      firesgroup = new Group()
    
     
}

function draw() 
{
  background(bgimg);  
  drawSprites();

  textSize(25)
  fill("black")
  text("x : "+mouseX+" y : "+mouseY,mouseX,mouseY)

  if(keyDown("left"))
  {
      steven.x = steven.x - 5
  }

  if(keyDown("right"))
  {
        steven.x = steven.x + 5
  }

  fill("black")
  text("HEALTH : "+StevenHealth,1076, 51 );
  text("SCORE : "+score,1076, 100 );
  spawnCookies()
  spawnFire()

}

function spawnCookies()
{
    if(frameCount%150===0)
    {
      cookie = createSprite(random(15,1200), 0, 20, 20);
      cookie.addImage("cookie", cookieImage);
      cookie.scale = 0.1;

      cookie.velocityY = 6; 
      cookiesgroup.add(cookie)


    }
}

function spawnFire()
{
  if(frameCount%150===0)
  {
      fireball = createSprite(333,375);
      fireball.addAnimation("fireimg",fireImage)
      fireball.scale = 0.5;

      fireball.velocityX=random(2,10);
      fireball.velocityY=random(-4,4);

      firesgroup.add(fireball)







 }
}
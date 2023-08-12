var PLAY = 1;
var END = 0;
var gameState = PLAY;

var Player;
var enemiesGroup, enemy1, enemy2, enemy3;
var cloudsGroup, cloud;
var backGroundImg;
var invisibleGround;

var score = 0;

var gameOver, restart;

function preload() {
    PlayerImg = loadImage("Images/ghost-standing.png");
    enemy1Img = loadImage("Images/Enemy 1.png");
    enemy2Img = loadImage("Images/Enemy 2.jpg");
    enemy3Img = loadImage("Images/Enemy 3.png");
    backGroundImg = loadImage("Images/Background Image.avif");
    cloud = loadImage("Images/Cloud.png");
    towerImg = loadImage("Images/towe.png")
}

function setup() {
    createCanvas(400, 680);
    Player = createSprite(300, 650);
    Player.addImage("playing",PlayerImg);
    Player.scale = 0.2;

    backGround = createSprite(200,340, 400,680)
    backGround.addImage("TowerImage", towerImg)
}
function draw(){
    background(125);
    drawSprites();
}


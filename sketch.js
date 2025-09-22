let snake = [];     
let food;           
let scl = 20;       
let xdir = 1;       
let ydir = 0;       
let pontos = 0;     

function setup() {
  createCanvas(400, 400);
  frameRate(10); 
  snake[0] = createVector(floor(width / (2 * scl)), floor(height / (2 * scl)));
  food = createFood();
}


function draw() {
  background(51);

  
  moveSnake();

  
  if (snake[0].x === food.x && snake[0].y === food.y) {
    pontos++;
    food = createFood();
  } else {
    
    snake.pop();
  }

  
  fill(255, 0, 0);
  rect(food.x * scl, food.y * scl, scl, scl);

  
  fill(0, 255, 0);
  for (let i = 0; i < snake.length; i++) {
    rect(snake[i].x * scl, snake[i].y * scl, scl, scl);
  }

  
  if (checkGameOver()) {
    noLoop();
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Game Over!", width / 2, height / 2);
  }

  
  fill(255);
  textSize(16);
  text("Pontos: " + pontos, 50, 20);
}


function moveSnake() {
  let head = snake[0].copy();
  head.x += xdir;
  head.y += ydir;
  snake.unshift(head); 
}


function createFood() {
  let cols = floor(width / scl);
  let rows = floor(height / scl);
  return createVector(floor(random(cols)), floor(random(rows)));
}


function checkGameOver() {
  let head = snake[0];

  
  if (head.x < 0 || head.x >= width / scl || head.y < 0 || head.y >= height / scl) {
    return true;
  }


  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      return true;
    }
  }
  return false;
}
function keyPressed() {
  if (keyCode === UP_ARROW && ydir === 0) {
    xdir = 0;
    ydir = -1;
  } else if (keyCode === DOWN_ARROW && ydir === 0) {
    xdir = 0;
    ydir = 1;
  } else if (keyCode === LEFT_ARROW && xdir === 0) {
    xdir = -1;
    ydir = 0;
  } else if (keyCode === RIGHT_ARROW && xdir === 0) {
    xdir = 1;
    ydir = 0;
  }
}

function setup(){
  createCanvas(screen.width, screen.height);
  stroke('#00FF7F');
  noFill();
  frameRate(20);
  rectMode(CENTER);
}

function draw(){
  // if (mouseIsPressed) {
  //     stroke('#FF143C');
  //   } else {
  //     stroke('#00FF7F');
  //   }
    rect(mouseX, mouseY, 80, 80);
}

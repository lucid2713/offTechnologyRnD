function setup(){
  createCanvas(screen.width, screen.height);
  stroke('#181aff');
  // stroke(color(24, 26, 255, 90));
  noFill();
  frameRate(10);
  rectMode(CENTER);
}

function draw(){
  // if (mouseIsPressed) {
  //     stroke('#FF143C');
  //   } else {
  //     stroke('#00FF7F');
  //   }
    ellipse(mouseX, mouseY, 300, 300);
    fill(255);
}

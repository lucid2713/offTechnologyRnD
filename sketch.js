function setup(){
  createCanvas(screen.width, screen.height);
  stroke('#00FF7F');
  // fill(0);
  noFill();
  frameRate(20);
  rectMode(CENTER);
}

function draw(){
  if (mouseIsPressed) {
      // fill('#00FF7F');
      stroke('#FF143C');
    } else {
      stroke('#00FF7F');
    }
    // ellipse(mouseX, mouseY, 80, 80);
    rect(mouseX, mouseY, 80, 80);
    // rect(50, 100, 200, 150);
    // rect(300, 150, 200, 150);
    // rect(550, 130, 200, 150);
  // background(204);
  // if (mouseX < 50) {
  //   rect(0, 0, 50, 100);  // Left
  // }
  // else {
  //   rect(50, 0, 50, 100); // Right
  // }

}

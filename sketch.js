let a = 0;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  canvas.style('position', 'fixed');
  textSize(32);
  
}

function draw() {
  background(255);

  fill(200, 50, 0);
  noStroke();
  
  if (mouseIsPressed) {
    push(); // Save current state
    translate(mouseX, mouseY); // Move to mouse location
    rotate(radians(a)); // Rotate 45 degrees
    textSize(150);
    text('World', 0, 0); // Draw text at new origin
    pop(); // Restore original state
    a+=10;
  } else {
    text('Hello', mouseX, mouseY);
  }
}

let box = [];
// let background = bg;

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
  background(255);
  for (let i = 0; i < 20; i++) {
    box[i] = {
      x: random(width / 3),
      y: random(height / 3),
      w: 30,
      c: color(random(255), random(255), random(255)),
      dy: random(5),
      dx: random(5),
    }
  }
  // ellipseMode(RADIUS);
  noStroke();
}

function draw() {
  background('white');
  drawMessageText();
  box.forEach(function(b) {
    // const b = box[i];
    let from = color('red');
    let to = color('blue');
    let interA = lerpColor(from, to, 0.44);
    let interB = lerpColor(from, to, 0.55);
    let a = [interA, interB];
    fill(random(a));
    // fill(interB);
    square(b.x, b.y, b.w, b.h);
    b.x += b.dx;
    b.y += b.dy;
    
    if (b.x > width - 20 || b.x < 0) {
      b.dx *= -1;
      b.x += b.dx;
    }
    if (b.y > height - 20 || b.y < 0) {
      b.dy *= -1;
      b.y += b.dy;
    }
  } );

}

let message = {
  text: 'Press 1-5 to change speed or 0 to hide/reveal this message',
  size: 17,
  visible: true
}

function drawMessageText() {
  if (message.visible) {
    fill(0);
    textSize(message.size); 
    text(message.text, 30, 20);
  }
}

function keyTyped() {
  if (key === '1') {
    for (let i = 0; i < 20; i++) {
      box[i].dx = random(1, 5);
      box[i].dy = random(1,5);
    } 
    } else if (key === '4') {
    for (let i = 0; i < 20; i++) {
      box[i].dx = random(5, 10);
      box[i].dy = random(5, 10);
  }
  } else if (key === '3') {
    for (let i = 0; i < 20; i++) {
      box[i].dx = random(10, 15);
      box[i].dy = random(10, 15);
}
} else if (key === '2') {
    for (let i = 0; i < 20; i++) {
      box[i].dx = random(1, 20);
      box[i].dy = random(1, 20);
    }
} else if (key === '5') {
    for (let i = 0; i < 20; i++) {
      box[i].dx = random(0.5, 2);
      box[i].dy = random(0.5, 2);
    }
} if (key === '0') {
  message.visible = !message.visible;
// } if (key === 'b') {
//   background(random(255), random(255), random(255));
}
}
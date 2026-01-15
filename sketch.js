let pg1, pg2;
let img;

function preload() {
  img = loadImage("img/gradient.jpg");
}

function setup() {
  createCanvas(600, 600).parent("canvasWrapper");

  pg1 = createGraphics(600, 600);
  pg2 = createGraphics(600, 600);

  pg1.noStroke();
}

function draw() {

  pg2.image(img, 0, 0, width, height);

  
  pg1.clear();


  for (let x = 0; x < width; x += 20) {
    for (let y = 0; y < height; y += 20) {

      let col = pg2.get(x, y);
      pg1.fill(col);
      pg1.ellipse(x, y, 30, 30);

    }
  }

  image(pg1, 0, 0);
}

function saveIMG() {
  pg1.save("cercle.png");
}

function keyPressed() {
  if (key === "s" || key === "S") {
    saveIMG();
  }
}

function setup() {
    createCanvas(700, 500);
    noStroke();
}

function draw (){
	background(86, 176, 0);
    stem(350, 250, 50);
    leaf();
    petal();
    
}

function stem (x, y, diameter) {
    //stem of sunflower
    fill(25, 76, 51)
    rect(x-5, y, 10, 250);
}

function leaf(){
    //triangle (x1 = x point 1
    //         (y1 = y point 1)
    //triangle (x2 = x point 2)
    //         (y2 = y point 2)
    //triangle (x3 = x point 3)
    //         (y3 = y point 3)

    //triangles on right side 
    fill(25, 76, 51)
    triangle(355, 365, 435, 310, 345, 355);

    fill(25, 76, 51)
    triangle(355, 465, 435, 410, 345, 455);

    fill(25, 76, 51)
    triangle(355, 415, 435, 360, 345, 405);

    //triangles on left side 
    fill(25, 76, 51)
    triangle(365, 355, 310, 435, 355, 345);
}

function petal(){
        fill(255, 206, 27)
        translate(350, 250)
        for (var i = 0; i < 10; i ++) {
            ellipse(0, 30, 20, 80);
            rotate(PI/5);
          }
}
    

function setup() {
	createCanvas(700, 500);
}

function draw (){
	background(86, 176, 0);
	sunflower(350, 250, 50);
}


function sunflower (x, y, diameter) {
	fill(25, 76, 51)
	rect(x-5, y, 10, 150);

	fill(76, 25, 25)
	ellipse(x, y, diameter, diameter);
}


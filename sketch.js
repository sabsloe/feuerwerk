let feuerwerke = [];

function setup() {
	createCanvas(400, 400);

}

function draw() {
	background(0);
	if (random(10) < 1) {
		feuerwerke.push(new Feuerwerk(random(400), 400, 0, random(-10, -14)));
	}

	for (let i = feuerwerke.length-1; i >= 0; i--) {
		feuerwerke[i].bewegen();

		// Feuerwerk zeichnen
		feuerwerke[i].zeichnen();
		
		if(feuerwerke[i].fertig)
			{
				feuerwerke.splice(i,1);
			}
	}
	console.log(feuerwerke.length);

}

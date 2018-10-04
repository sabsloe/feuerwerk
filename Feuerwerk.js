class Feuerwerk {
	constructor(x, y, vx, vy) {
		this.x = x;
		this.y = y;
		this.vx = vx;
		this.vy = vy;
		this.g = 0.3; // Schwerkraft
		this.farbe = color(random(255), random(255), 0);
		this.anzahl = 20;
		
		this.timer = 25;
		this.fertig = false;

		this.gezuendet = false;

		this.teilchen = [];
	}

	bewegen() {
		if (this.gezuendet == false) {
			this.vy += this.g; // Beschleunigung nach unten!

			this.x += this.vx;
			this.y += this.vy;


			if (this.vy > 0) {

				this.zuenden();
			}
		}
	}
	zuenden() {
		this.gezuendet = true;
		console.log(this.anzahl);
		for (let i = 0; i < this.anzahl; i++) {
			let vx = random(-6, 6);
			let vy = random(-6, 6);

			this.teilchen.push(new Teilchen(this.x, this.y, vx, vy, this.farbe));
		}
	}


	zeichnen() {
		if (this.gezuendet == false) {
			fill(this.farbe);
			ellipse(this.x, this.y, 5, 5);
		} else {
			this.timer--;
			if (this.timer == 0)
				{
					this.fertig = true;
				}
			
			for (let i = 0; i < this.anzahl; i++) {
				this.teilchen[i].bewegen();
				this.teilchen[i].zeichnen();
			}
		}
	}
}

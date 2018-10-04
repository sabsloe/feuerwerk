class Teilchen {
	constructor(x, y, vx, vy, farbe) {
		this.x = x;
		this.y = y;
		this.vx = vx;
		this.vy = vy;
		this.farbe = farbe;
		this.g = 0.3; // Schwerkraft
		this.aktiv = true;
		//console.log("neues Teilchen");
	}

	bewegen() {
		if (this.aktiv) {
			this.vy += this.g; // Beschleunigung nach unten!

			this.x += this.vx;
			this.y += this.vy;
		}

		if (this.y > 400) {
			this.aktiv = false;
		}

	}


	zeichnen() {
		if (this.aktiv) {
			fill(this.farbe);
			ellipse(this.x, this.y, 5, 5);
		}

	}
}

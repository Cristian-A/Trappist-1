
let stars = [];
let info = null;
const W = 1024, H = 1024;
const halfH = H / 2, halfW = W / 2;
const textX = 80 - halfW, textY = 80 - halfH;

let asteroidButton, resetButton;

function setup() {
	createCanvas(W, H);
	for (let i = 0; i < 100; i++) {
		stars.push({
			x: Math.random() * W - halfW,
			y: Math.random() * H - halfH,
			r: Math.random() * 2,
		});
	}
	asteroidButton = createButton('Launch Asteroid');
	asteroidButton.position(halfW - 200, H - 50);
	asteroidButton.mousePressed(launchAsteroid);
	resetButton = createButton('Reset Simulation');
	resetButton.position(halfW - 50, H - 50);
	resetButton.mousePressed(() => window.location.reload());
}

function draw() {
	translate(halfW, halfH);
	background(0);
	noStroke();
	for (const star of stars) {
		fill(255);
		circle(star.x, star.y, star.r);
	}
	for (const body of system) {
		for (const other of system) {
			if (body === other) continue;
			body.attract(other);
		}
	}
	for (const body of system) {
		body.update();
		if (body.path !== false) {
			stroke(68);
			strokeWeight(1.5);
			for (let i = 0; i < body.path.length - 2; i++) {
				line(
					body.path[i].x, body.path[i].y,
					body.path[i + 1].x, body.path[i + 1].y
				);
			}
			noStroke();
		}
	}
	for (const body of system) {
		if (body.layer != undefined) {
			stroke(body.layer.color);
			strokeWeight(body.layer.weight);
		}
		fill(body.color);
		circle(body.position.x, body.position.y, body.radius);
	}
	textSize(30); fill(255);
	text('Trappist-1', textX, textY);
	if (info != null) {
		textSize(16); fill('#FE9B34'); textStyle(BOLD);
		text('NAME', textX, textY + 60);
		text('MASS', textX, textY + 90);
		fill(255); textStyle(NORMAL);
		text(info.name, textX + 60, textY + 60);
		text(info.mass.toFixed(2) + ' M🜨', textX + 60, textY + 90);
		if (info.orbit != undefined) {
			fill('#FE9B34'); textStyle(BOLD);
			text('ORBIT', textX, textY + 120);
			fill(255); textStyle(NORMAL);
			text(info.orbit + ' R🜨', textX + 60, textY + 120);
		}
		noFill(); strokeWeight(1.5); stroke('#FFFB00');
		circle(info.position.x, info.position.y, info.radius + 20);
	}
}

function mouseClicked() {
	const x = mouseX - halfW, y = mouseY - halfH;
	for (const body of system) {
		if (x > body.position.x - 20 && x < body.position.x + 20 &&
			y > body.position.y - 20 && y < body.position.y + 20) {
			info = body; return;
		}
	}
	info = null;
}

function launchAsteroid() {
	asteroidButton.attribute('disabled', 'true');
	const asteroid = new Body({
		name: 'Asteroid',
		mass: Math.random() * 1000 + 1000,
		radius: Math.random() * 5 + 15,
		color: '#808080',
		position: { x: halfW - 100, y: halfH - 100 },
		velocity: { x: - Math.random() * 2, y: 0.5 - Math.random() * 2 },
	});
	system.push(asteroid);
}

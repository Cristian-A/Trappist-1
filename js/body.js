
class Body {

	constructor({
		name, mass, position, velocity, radius,
		color, path, radiation, atmosphere, orbit
	}) {
		this.name = name;
		this.mass = mass;
		this.position = position || { x: 0, y: 0 };
		if (orbit !== undefined) {
			this.orbit = orbit;
			this.position = { x: 0, y: orbit / units.orbitScaleFactor };
		}
		this.velocity = velocity || { x: 1, y: 0 };
		this.acceleration = { x: 0, y: 0 };
		this.color = color;
		this.path = path || [ ];
		this.radius = radius;
		this.layer = radiation || atmosphere;
	}
  
	update() {
		this.position.x += this.velocity.x;
		this.position.y += this.velocity.y;
		if (this.path !== false) {
			this.path.push({ x: this.position.x, y: this.position.y });
			if (this.path.length > 500) this.path.splice(0, 1);
		}
	}
  
	apply(force) {
		this.velocity.x += force.x / this.mass;
		this.velocity.y += force.y / this.mass;
	}
  
	attract(body) {
		const d = distance(
			this.position.x, this.position.y,
			body.position.x, body.position.y
		);
		const g = gravity(this.mass, body.mass, d);
		const cd = constrain(d, 0, 20);
		const force = {
			x: (this.position.x - body.position.x) * g / cd,
			y: (this.position.y - body.position.y) * g / cd,
		};
		body.apply(force);
	}
  
}

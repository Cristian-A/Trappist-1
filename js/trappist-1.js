
const units = {
	'M☉': 1.98847e30, // 1.98847 × 10^30 kg
	'R☉': 6.957e8,    // 6.95700 × 10^8  km
	'M🜨': 5.972e24,   // 5.972 × 10^24 kg
	'R🜨': 6371,       // 6371 km
	scaleFactor: 12,
    orbitScaleFactor: 3,
};

// the positions of the planets are relative to the main star.
// the radius of the planets are relative to the earth radius.
// the mass of the planets are relative to the earth mass.

const system = [
	new Body({
		name: 'Trappist-1 a', path: false,
		mass:   0.0898 * units['M☉'] / units['M🜨'], // M🜨
		radius: 0.1192 * units['R☉'] / units['R🜨'] / 400, // R🜨
		position: { x: 0, y: 0 },
		velocity: { x: 0, y: 0 },
		color: '#CF0600',
		radiation: { color: '#F9263655', weight: 10 },
	}),
	new Body({
		name: 'Trappist-1 b',
		mass: 1.3771, // M🜨
		radius: 1.116 * units.scaleFactor, // R🜨
		orbit: 270.97, // R🜨
		color: '#577F84',
		atmosphere: { color: '#62B1A366', weight: 4 },
	}),
	new Body({
		name: 'Trappist-1 c',
		mass: 1.308, // M🜨
		radius: 1.097 * units.scaleFactor, // R🜨
		orbit: 371, // R🜨
		color: '#928877',
	}),
    new Body({
		name: 'Trappist-1 d',
		mass: 0.388, // M🜨
		radius: 0.788 * units.scaleFactor, // R🜨
		orbit: 522.92, // R🜨
		color: '#2D3B50',
		atmosphere: { color: '#FFFFFF33', weight: 3 },
	}),
    new Body({
		name: 'Trappist-1 e',
		mass: 0.692, // M🜨
		radius: 0.92 * units.scaleFactor, // R🜨
		orbit: 686.82, // R🜨
		color: '#446065',
		atmosphere: { color: '#77857933', weight: 3 },
	}),
    new Body({
		name: 'Trappist-1 f',
		mass: 1.039, // M🜨
		radius: 1.045 * units.scaleFactor, // R🜨
		orbit: 903.78, // R🜨
		color: '#7E776F',
		atmosphere: { color: '#1E354677', weight: 4 },
	}),
    new Body({
		name: 'Trappist-1 g',
		mass: 1.321, // M🜨
		radius: 1.129 * units.scaleFactor, // R🜨
		orbit: 1099.71, // R🜨
		color: '#EFDFCF',
	}),
    new Body({
		name: 'Trappist-1 h',
		mass: 0.326, // M🜨
		radius: 0.755 * units.scaleFactor, // R🜨
		orbit: 1453.24, // R🜨
		color: '#744F35',
	}),
];

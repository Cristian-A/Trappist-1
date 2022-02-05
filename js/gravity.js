
const G = 6.67430e-4; // tweaked to earth units
const gravity = (m1, m2, d) => G * m1 * m2 / (d * d);
const distance = (x1, y1, x2, y2) => Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

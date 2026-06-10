const fs = require("fs");
const path = require("path");

const source = path.join(__dirname, "outputs", "marrakech-real-estate-frontend");
const destination = path.join(__dirname, "dist");

fs.rmSync(destination, { recursive: true, force: true });
fs.mkdirSync(destination, { recursive: true });
fs.cpSync(source, destination, { recursive: true });

console.log("Vercel build ready: dist/");

// Concepto Básico de Node.js
const http = require("http");
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hola, Mundo!");
});
server.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});

// Modulo local
// operaciones.js
function sumar(a, b) {
  return a + b;
}
function restar(a, b) {
  return a - b;
}
module.exports = { sumar, restar };

// archivo: index.js
const operaciones = require("./operaciones");

const resultadoSuma = operaciones.sumar(5, 3);
const resultadoResta = operaciones.restar(5, 3);

console.log(`Resultado de la suma: ${resultadoSuma}`);
console.log(`Resultado de la resta: ${resultadoResta}`);

// Modulo nativo fs
const fs = require("fs");
let mensaje = "Hola, mundo!";

// Crear un archivo llamado 'texto.txt' y escribir 'Hola, mundo!' en él
fs.writeFile("texto.txt", mensaje, (err) => {
  if (err) throw err;
  console.log('Archivo "texto.txt" creado y contenido escrito.');
});

// Leer el contenido del archivo 'texto.txt'
fs.readFile("texto.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log("Contenido del archivo:");
  console.log(data);
});

// Modificar el contenido del archivo 'texto.txt'
fs.writeFile("texto.txt", "Hello, world!", (err) => {
  if (err) throw err;
  console.log('Archivo "texto.txt" modificado con éxito.');
});

// Eliminar el archivo
fs.unlink("texto.txt", (err) => {
  if (err) throw err;
  console.log("Archivo eliminado.");
});

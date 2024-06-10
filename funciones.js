let a = parseFloat(prompt("Ingrese el valor de a:"));
let b = parseFloat(prompt("Ingrese el valor de b:"));
let c = parseFloat(prompt("Ingrese el valor de c:"));

let discriminante = b * b - 4 * a * c;

if (discriminante > 0) {
  let raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
  let raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);

  document.write("Las raíces son: " + raiz1 + " y " + raiz2);
} else if (discriminante == 0) {
  let raiz2 = -b / (2 * a);
  document.write("La ecuación tiene una única raíz: " + raiz2);
} else {
  document.write("La ecuación no tiene soluciones reales.");
}
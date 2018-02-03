//alert("Hola Mundo");
var person=prompt ("Escribe tu nombre");
var costo=prompt ("¿De qué cantidad necesitas calcular el iva?");
console.log(costo);
var cliente="Rocío Rangel";
console.log("Rocío Rangel");
var facturado;
var iva = (1.16 * costo);
alert("Hola " + person + ", tú total a pagar con iva es de " + Math.ceil(iva));
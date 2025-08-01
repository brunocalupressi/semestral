const boton= document.getElementById("boton");
const form= document.getElementById("formu");
const name= document.getElementById("nombre");
const entr= document.getElementById("entrada1");
const tip= document.getElementById("tipo");

formu.addEventListener("submit", formus);

function formus(e) {
    e.preventDefault();
const names = nombre.value;
const entra = entrada1.value;
const tipos = tipo.value;

paga = entra * 1000;


 if (names.length < 1) {
Swal.fire({
  icon: "error",
  title: "Error",
  text: "Complete la casilla de Nombre.",

});
return;
 }
  if (entra.length <= 0) {
Swal.fire({
  icon: "error",
  title: "Error",
  text: "El número de entradas no puede ser igual o menor que 0.",

});
return;
 }

  if (tipos != 1 ) {
Swal.fire({
  icon: "error",

  text: "Inserte 1.",

});
return;


}
else{
Swal.fire({
      icon: "success",
title:"Su reserva fue confirmada!",
  text: "Hola " + names + ", usted debe pagar: " + paga,


});
return;
}
}

zzzzzzzz
//Funcionalidad de los botones
//Funcionalidad de boton1
document.getElementById("boton1").addEventListener("click", () => { //funcion flecha
  console.log("boton1"); //testear boton1
  const bienvenidaBoson = document.getElementById("bienvenidaBoson");/*Se creo una variable
  para la seccion llamada bienvenidaBoson*/
  bienvenidaBoson.style.display = "none"; /*La variable const Boson se hace
  desaparecer con none al hacer click en el boton1*/

});

document.getElementById("boton2").addEventListener("click", () => { //funcion flecha
  console.log("boton2");//testear boton2
  const bienvenidaBoson = document.getElementById("bienvenidaBoson")/*Se creo una variable
  para la seccion llamada bienvenidaBoson*/
  bienvenidaBoson.style.display = "none";/*La variable const Boson se hace
  desaparecer con none al hacer click en el boton1*/
})

document.getElementById("boton3").addEventListener("click", () => {
  console.log("boton3");
  const bienvenidaBoson = document.getElementById("bienvenidaBoson");/*Se creo una variable
  para la seccion llamada bienvenidaBoson*/
  bienvenidaBoson.style.display = "none";/*La variable const Boson se hace
  desaparecer con none al hacer click en el boton1*/
  const ayuda = document.getElementById("ayudaBoson");/*Se creo una variable para la seccion de ayuda*/
  ayudaBoson.style.display = "block"/*La variable ayuda se hace desaparecer
   con block al hacer click en el boton3*/
})

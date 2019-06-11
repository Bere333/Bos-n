//Funcionalidad de los botones
//Funcionalidad de boton1
document.getElementById("boton1").addEventListener("click", () => {
  console.log("boton1"); //testear boton1
  const bienvenidaBoson = document.getElementById("bienvenidaBoson");/*Se creo una variable
  para la seccion llamada bienvenidaBoson*/
  bienvenidaBoson.style.display = "none"; /*La variable const Boson se hace
  desaparecer con none al hacer click en el boton1*/

})

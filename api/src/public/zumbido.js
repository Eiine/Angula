let boton = document.getElementById("zumbido");
const audio = new Audio("../audio/1.mp3");
navigator.vibrate =
  navigator.vibrate ||
  navigator.webkitVibrate ||
  navigator.mozVibrate ||
  navigator.msVibrate;
boton.addEventListener("click", () => {
  console.log("hola mundo");
  audio.play();
  console.log(navigator.vibrate);
  window.navigator.vibrate();
});

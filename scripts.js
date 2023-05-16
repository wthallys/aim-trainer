alert("click on the red circle to start");

let btn = document.querySelector(".btn");

const move = () => {
  var randomX = Math.floor(Math.random() * (window.innerWidth - 150));
  var randomY = Math.floor(Math.random() * (window.innerHeight - 150));
  btn.style.position = "absolute";
  btn.style.top = randomY + "px";
  btn.style.left = randomX + "px";
}

btn.addEventListener("click", move);
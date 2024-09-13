"use strict";

function colorChanger(color) {
  return (document.querySelector("body").style.backgroundColor = color);
}

document.querySelector(".red").addEventListener("click", function () {
  colorChanger("red");
});

document.querySelector(".green").addEventListener("click", function () {
  colorChanger("green");
});

document.querySelector(".yellow").addEventListener("click", function () {
  colorChanger("yellow");
});

document.querySelector(".random").addEventListener("click", function () {
  let random1 = Math.floor(Math.random() * 256);
  let random2 = Math.floor(Math.random() * 256);
  let random3 = Math.floor(Math.random() * 256);
  let randomColor = `rgb(${random1},${random2},${random3})`;
  colorChanger(randomColor);
});

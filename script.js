function changeText() {
  document.querySelector("h1").textContent = "I just fixed my first bug😎";
}

function resetText() {
  document.querySelector("h1").textContent = "My First Interactive Website 🚀";
}

function makeRed() {
  document.querySelector("h1").style.color = "red";
}

function makeBlack() {
  document.querySelector("h1").style.color = "black";
}

function useInput() {
  const input = document.getElementById("userInput").value;
  document.querySelector("h1").textContent = input;
}
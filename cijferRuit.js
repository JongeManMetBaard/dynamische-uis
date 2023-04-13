let getal = prompt("Voer een getal in: ")

let string = "";
// Pyramid
for (let i = 1; i <= getal; i++) {
  for (let k = 1; k <= 2 * i / 2; k++) {
    if (k > 1) {
      string += "-";
    }
    string += k;
  }
  string += "<br>";
}
// Reverse Pyramid
for (let i = 1; i <= getal - 1; i++) {  
  for (let k = 1; k <= 2 * (getal - i) / 2; k++) {
    if (k > 1) {
      string += "-";
    }
    string += k;
  }
  string += "<br>";
}
let my_h1 = document.getElementById("antwoord").innerHTML = string;
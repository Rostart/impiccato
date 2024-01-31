const inputBar = document.getElementById("input");
const btn = document.getElementById("btn");
const word = document.getElementById("word");
const secretWord = "CATAPULTA";
let parolaDaIndovinare = [];
let lettereIndovinate = [];

function wordView() {
  parolaDaIndovinare = secretWord.split("");
  lettereIndovinate = arrayDinamico(secretWord.length, "_");
  word.innerHTML = lettereIndovinate.join(" ");
}

function arrayDinamico(length, value) {
  let underscore = [];
  for (let i = 0; i < length; i++) {
    underscore.push(value);
  }
  return underscore;
}

function letteraDaIndovinare() {
  let valore = inputBar.value.toUpperCase();
  let valoreScore = 10;

  if (secretWord.includes(valore)) {
    parolaDaIndovinare.forEach((lettera, i) => {
      if (lettera === valore) {
        lettereIndovinate[i] = valore;
      }
    });
  } else {
    valoreScore--;
  }

  word.innerHTML = lettereIndovinate.join(" ");
}

btn.addEventListener("click", letteraDaIndovinare);
wordView();

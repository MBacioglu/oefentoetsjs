// opdr1 & 2

let rightWord = "js";
let guessWord;
 
while (guessWord !== rightWord) {
    guessWord = prompt("Voer het correcte woord in");
 
    if (guessWord === rightWord) {
        alert("Je hebt het correcte woord ingevoerd");
    } else {
        alert("Je hebt het verkeerde woord ingevoerd");
        guessWord;
    }
}
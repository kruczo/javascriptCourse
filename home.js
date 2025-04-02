//console.log("Cześć");
//let cars = ['opel','fiat','ford', 10];
//console.log(cars.length);
//let i = 0;
//while(i < cars.length){
//console.log(cars[i]);
//  i++;
//}

//for(let i = 0; i < cars.length; i++){
//   console.log(cars[i]);
//}

//1.ile było testów
//2.jaka największa liczba wytw. baniek
//3. płyny z największą liczbą baniek
//4. sprawdzenie undefined w tablicach
//5. metoda która znajdzie i wypisze najlepszy wynik z tej tablicy
//6. metoda która znajdzie i wypisze indexy najlepszych prób
let bubbles = [
  43, 28, 59, 22, 35, 48, 25, 60, 31, 40, 50, 24, 33, 55, 44, 60, 38, 41, 27,
  21, 46, 36, 53, 57, 30, 52, 56, 42, 26, 58,
];
bubbles[100] = 77;
console.log(bubbles);
function getHighScore(bubbles) {
  let highestScore = 0;
  for (let i = 0; i < bubbles.length; i++) {
    if (bubbles[i] > highestScore) {
      highestScore = bubbles[i];
    }
    console.log(bubbles[i]);
  }
  return highestScore;
}

function highestResult(bubbles, highestScore) {
  let highest = [];
  for (let i = 0; i < bubbles.length; i++) {
    if (bubbles[i] === highestScore) {
      highest.push(i);
    }
  }
  return highest;
}

let highestScore = getHighScore(bubbles);
console.log("Liczba testów: " + bubbles.length);
console.log("Najwięcej baniek: " + highestScore);

let highest = highestResult(bubbles, highestScore);
console.log("Płyny z najlepszym wynikiem: " + highest);

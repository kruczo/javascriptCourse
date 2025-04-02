//użyj tablice
// napisz funkcje
// wykorzystaj fora
// napisz funkcje która napisze średnią, przyjmuje tablicę z ocenami, wypisze wynik średniej

let grades = [4, 5, 3, 5, 2, 4];

function averageGrade(grades) {
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum = sum + grades[i];
  }
  console.log(sum);
  return Number(sum / grades.length).toFixed(2);
}
let sumOfGrades = averageGrade(grades);
console.log(sumOfGrades);

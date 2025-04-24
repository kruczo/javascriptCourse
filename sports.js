let sportowcy = [
  { imie: "Anna", punkty: [45, 78, 62, 90] },
  { imie: "Bartek", punkty: [55, 60, 65, 70] },
  { imie: "Celina", punkty: [20, 30, 25, 40] },
  { imie: "Darek", punkty: [100, 98, 95, 97] },
  { imie: "Ela", punkty: [40, 42, 43, 45] },
];
// sportowcy[1].imie;
//console.log(sportowcy[1].imie);
//console.log(sportowcy[1]);
//console.log(sportowcy[1].imie[10]);
function average(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
}

function avgPerPerson() {
  for (let i = 0; i < sportowcy.length; i++) {
    console.log(average(sportowcy[i].punkty));
  }
}
avgPerPerson();

function allAverage() {
  let sum = 0;
  for (let i = 0; i < sportowcy.length; i++) {
    sum += average(sportowcy[i].punkty);
  }
  return sum / sportowcy.length;
}
console.log(allAverage());

function avgPP2(index) {
  return average(sportowcy[index].punkty);
}
console.log("Średnia osoby: " + avgPP2(0));

function bestPlayer() {
  let best = 0;
  let i = 0;
  let bestIndex = 0;
  while (i < sportowcy.length) {
    let avgPerPerson = avgPP2(i);
    if (avgPerPerson > best) {
      best = avgPerPerson;
      bestIndex = i;
    }
    console.log("Przed: " + i);
    i++; //0:1, 1:2, 2:3, 3:4, 4:5,
    console.log("Po: " + i);
  }
  return sportowcy[bestIndex].imie + " " + best;
}
console.log(bestPlayer());

function worstPlayer() {
  let worst = 100;
  let worstIndex = 0;
  for (let i = 0; i < sportowcy.length; i++) {
    let avgPerPerson = avgPP2(i);
    if (avgPerPerson < worst) {
      worst = avgPerPerson;
      worstIndex = i;
    }
  }
  return sportowcy[worstIndex].imie + " " + worst;
}
console.log(worstPlayer());

function lessThan50() {
  let names = [];
  for (let i = 0; i < sportowcy.length; i++) {
    let avgPerPerson = avgPP2(i);
    if (avgPerPerson < 50) {
      names.push({ name: sportowcy[i].imie, average: avgPerPerson });
    }
  }
  return names;
}

let names = lessThan50();
names.forEach((person) => {
  console.log(person.name + " " + person.average);
});

//sortowanie tablice sportowcy po średniej i wypisała ranking

//1 sposób - tworzy tablice srednich dla każdego i wypiszesz tablice posortowaną
// funkcja która coś przyjmuje i ma zwrócić tab srednich dla każdego zawodnika i to jako tablice

function sortedTab() {
  let sortedAvarage = [];
  for (let i = 0; i < sportowcy.length; i++) {
    sortedAvarage.push(average(sportowcy[i].punkty));
  }
  return sortedAvarage.sort((a, b) => b - a);
}
//console.log(sortedTab());

function sortedTab2() {
  return sportowcy.toSorted((a, b) => average(b.punkty) - average(a.punkty));
}

console.log(sortedTab2());

let ascTab = sortedTab3();
function sortedTab3() {
  return sportowcy.toSorted((a, b) => average(a.punkty) - average(b.punkty));
}

console.log(ascTab);

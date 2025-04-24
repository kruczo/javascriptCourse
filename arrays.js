let numbers = [5, 10, 22, 83, 67, 11, 3, 99, 118];
let names = new Array("daniel", "dawid", "klaudia", "iwona");
console.log(numbers);
//console.log(names.indexOf("daniel"));

names.unshift("monika", "kamila", "michał");
console.log(names);

//1 zmienia || 0 usuwa
names.splice(names.indexOf("dawid"), 1, "krzysztof", "halina", "helena");
//console.log(names);

let map1 = numbers.map((a) => a * 2);
console.log(map1);

let firstLetterUpperCaseNames = names.map((a) => {
  return a.charAt(0).toUpperCase() + a.substring(1);
});
console.log(firstLetterUpperCaseNames);

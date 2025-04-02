//let name = "daniel";
//let age = 23;
//let isAdult = true;

//introduce yourself

let person = {
  name: "Daniel",
  age: 23,
  isAdult: true,
  introduceYourself: function () {
    alert("cześć jestem " + this.name);
  },
};
//person.introduceYourself();

let anotherPerson = {
  name: "Dawid",
  age: 28,
  isAdult: true,
  introduceYourself: function () {
    alert("cześć jestem " + this.name);
  },
};
//anotherPerson.introduceYourself();

let opel = {
  model: "astra",
  year: 2003,
  kmAge: 155000,
  fuel: 0,
  drive: function () {
    if (this.fuel > 0) {
      console.log("Jedziesz.");
    } else {
      console.log("Musisz zatankować! ");
    }
  },
  addFuel: function (amount) {
    this.fuel = +amount;
  },
};

opel.drive();
opel.addFuel(50);
opel.drive();

//dodaj 6 kolejnych samochodów innych marek

let bmw = {
  model: "m8",
  year: 2003,
  kmAge: 155000,
  fuel: 0,
  drive: function () {
    if (this.fuel > 0) {
      console.log("Jedziesz.");
    } else {
      console.log("Musisz zatankować! ");
    }
  },
  addFuel: function (amount) {
    this.fuel = +amount;
  },
};

let volkswagen = {
  model: "golf",
  year: 2003,
  kmAge: 155000,
  fuel: 0,
  drive: function () {
    if (this.fuel > 0) {
      console.log("Jedziesz.");
    } else {
      console.log("Musisz zatankować! ");
    }
  },
  addFuel: function (amount) {
    this.fuel = +amount;
  },
};

let volvo = {
  model: "x50",
  year: 2003,
  kmAge: 155000,
  fuel: 0,
  drive: function () {
    if (this.fuel > 0) {
      console.log("Jedziesz.");
    } else {
      console.log("Musisz zatankować! ");
    }
  },
  addFuel: function (amount) {
    this.fuel = +amount;
  },
};

let skoda = {
  model: "fabia",
  year: 2003,
  kmAge: 155000,
  fuel: 0,
  drive: function () {
    if (this.fuel > 0) {
      console.log("Jedziesz.");
    } else {
      console.log("Musisz zatankować! ");
    }
  },
  addFuel: function (amount) {
    this.fuel = +amount;
  },
};

let audi = {
  model: "rs6",
  year: 2003,
  kmAge: 155000,
  fuel: 0,
  drive: function () {
    if (this.fuel > 0) {
      console.log("Jedziesz.");
    } else {
      console.log("Musisz zatankować! ");
    }
  },
  addFuel: function (amount) {
    this.fuel = +amount;
  },
};

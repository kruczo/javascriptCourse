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
let opel2 = new Car("astra", 2003, 155000, 20);
opel2.drive();

let opel3 = new Car("astra", 2003, 155000, 20);
opel3.drive();

let opel4 = new Car("astra", 2003, 155000, 20);
opel4.drive();

let opel5 = new Car("astra", 2003, 155000, 20);
opel5.drive();

let opel6 = new Car("astra", 2003, 155000, 20);
opel6.drive();

function Car(model2, year2, kmAge2, fuel2) {
  this.model = model2;
  this.year = year2;
  this.kmAge = kmAge2;
  this.fuel = fuel2;
  this.drive = function () {
    if (this.fuel > 0) {
      console.log(this.model + " jedziesz.");
    } else {
      console.log("Musisz zatankować! ");
    }
  };
  this.addFuel = function (amount) {
    this.fuel = +amount;
  };
}

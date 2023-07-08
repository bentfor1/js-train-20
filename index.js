/*
 * Функція конструктор: Vehicle
 * Властивості:
 * --------------------------------------
 * | Аргументи  |
 * |--------------|
 * | brand        |
 * | model        |
 * | year         |
 * | mileage      |
 */

// Створюємо функцію конструктор Vehicle.
function Vehicle(brand, model, year, mileage) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.mileage = mileage;

  //  Записуєм в this.brand значення аргументу brand, в this.model значення аргументу model і так далі зі всіми аргументами

  this.toString = function () {
    return this.brand + " " + this.model + " " + this.year;
  };
  // Рядковому представленю Vehicle призначаємо функцію яка повертає рядок: <brand> <model> <year>

  this.valueOf = function () {
    return this.mileage;
  };
  // valueOf - це метод, який використовується JavaScript для конвертації об'єкта в примітивне значення.
  // Ми перевизначаємо його тут, щоб він повертав this.mileage.
}
/*
 * Функція конструктор: Car
 * Властивості:
 * ----------------
 * | Властивість  |
 * |--------------|
 * | brand        |
 * | model        |
 * | year         |
 * | mileage      |
 * | fuelType     |
 * | speed        |
 */

//Створюємо Car - це ще один конструктор, який наслідує властивості і методи з Vehicle за допомогою функції apply.
function Car(brand, model, year, mileage, fuelType, speed) {
  // Викликаємо конструктор Vehicle за допомогою apply, передаємо в нього this, [brand, model, year, mileage].
  //  Записуєм в this.fuelType значення аргументу fuelType, в this.speed значення аргументу speed
  Vehicle.apply(this, [brand, model, year, mileage]);

  // Додаємо додаткові властивості для Car.
  this.fuelType = fuelType;
  this.speed = speed;
}

// Ми можемо перевизначити методи з Vehicle в Car.
// Рядковому представленю прототипу Car призначаємо функцію яка повертає рядок: <brand> <model> <year> - <fuelType>.
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.toString = function () {
  return Vehicle.prototype.toString.call(this) + " - " + this.fuelType;
};
// Cтворюємо метод accelerate для прискорення швидкості прототипу Car, збільшує this.speed на передане число та виводить рядок в консоль: Автомобіль <make> <model> прискорився до швидкості <speed> км/год
Car.prototype.accelerate = function (speedIncrease) {
  this.speed += speedIncrease;
  console.log(
    "Автомобіль " +
      this.brand +
      " " +
      this.model +
      " прискорився до швидкості " +
      this.speed +
      " км/год"
  );
};
// Метод brake для гальмування прототипу Car,зменшує this.speed на передане число та виводить рядок в консоль в консоль: Автомобіль <make> <model> зменшив до швидкості <speed> км/год
Car.prototype.brake = function (speedDecrease) {
  this.speed -= speedDecrease;
  console.log(
    "Автомобіль " +
      this.brand +
      " " +
      this.model +
      " зменшив до швидкості " +
      this.speed +
      " км/год"
  );
};
// Створюємо новий екземпляр об'єкта Car
/*
 * Екземпляр об'єкту: Car
 * Властивості:
 * --------------------------------------
 * | Властивість  |  Значення           |
 * |--------------|---------------------|
 * | brand        |  "Audi"             |
 * | model        |  "A6"               |
 * | year         |  2018               |
 * | mileage      |  30000              |
 * | fuelType     |  "Petrol"           |
 * | speed        |  0                  |
 */

// Викличемо функції toString та valueOf об'єкта car

// Використовуємо методи для прискорення та передаємо 50

// Використовуємо методи для гальмування та передаємо 20
var car = new Car("Audi", "A6", 2018, 30000, "Petrol", 0);

// Викликаємо методи toString та valueOf об'єкта car
console.log(car);
console.log(car.toString()); // Виведе: Audi A6 2018 - Petrol
console.log(car.valueOf()); // Виведе: 0

// Використовуємо метод accelerate для прискорення та передаємо значення 50
car.accelerate(50); // Виведе: Автомобіль Audi A6 прискорився до швидкості 50 км/год

// Використовуємо метод brake для гальмування та передаємо значення 20
car.brake(20); // Виведе: Автомобіль Audi A6 зменшив до швидкості 30 км/год
/*
 * Функція конструктор Truck
 * Властивості:
 * --------------------
 * | Властивість      |
 * |------------------|
 * | brand            |
 * | model            |
 * | year             |
 * | mileage          |
 * | color            |
 * | engineType       |
 * | towingCapacity   |
 * | fuelType         |
 * | transmissionType |
 * | doors            |
 * | weight           |
 */

// Конструктор Truck наслідуємо Vehicle викликавши його в конструкторі з call
function Truck(
  brand,
  model,
  year,
  mileage,
  color,
  engineType,
  towingCapacity,
  fuelType,
  transmissionType,
  doors,
  weight
) {
  // Викликаємо Vehicle.call та передаємо в нього: this, brand, model, year, mileage
  //  Записуєм в this.color значення аргументу color, в this.engineType значення аргументу engineType і так далі зі всіми аргументами
  // Викликаємо Vehicle.call та передаємо в нього: this, brand, model, year, mileage
  Vehicle.call(this, brand, model, year, mileage);

  // Додаємо додаткові властивості для Truck.
  this.color = color;
  this.engineType = engineType;
  this.towingCapacity = towingCapacity;
  this.fuelType = fuelType;
  this.transmissionType = transmissionType;
  this.doors = doors;
  this.weight = weight;
}

// Додатковий метод specific для прототипу Trucks, примає число якщо воно більше towingCapacity виводить рядок в консоль: Навантаження занадто важке для буксирування, якщо ні то рядок Тягнення навантаження...
// Наслідуємо прототип Vehicle від Truck.
Truck.prototype = Object.create(Vehicle.prototype);

// Додаємо метод specific до прототипу Truck.
Truck.prototype.specific = function (weight) {
  if (weight > this.towingCapacity) {
    console.log("Навантаження занадто важке для буксирування");
  } else {
    console.log("Тягнення навантаження...");
  }
};
// Створюємо новий екземпляр об'єкта Truck
/*
 * Екземпляр об'єкту: myTruck
 * Властивості:
 * ---------------------------------------------------
 * | Властивість      | Значення                     |
 * |------------------|------------------------------|
 * | brand            | "Toyota"                     |
 * | model            | "Tundra"                     |
 * | year             | 2019                         |
 * | mileage          | 20000                        |
 * | color            | "Red"                        |
 * | engineType       | "V8"                         |
 * | towingCapacity   | 10000                        |
 * | fuelType         | "Gasoline"                   |
 * | transmissionType | "Automatic"                  |
 * | doors            | 4                            |
 * | weight           | 5600                         |
 */

// Викликаємо метод tow з вагою меншою за towingCapacity

// Викликаємо метод tow з вагою більшою за towingCapacity

// Додаємо метод drive для прототипу Car, який збільшує kilometers на передане число, та виводить Подорожуємо <kilometers> кілометрів у <brand> <model>.

// Використовуємо bind для зв'язування методу drive з конкретним об'єктом car.
// Це створює нову функцію, в якій this постійно встановлено на car, незалежно від того, як функцію викликають.
// Викликаємо функцію зі значенням 100,
var myTruck = new Truck(
  "Toyota",
  "Tundra",
  2019,
  20000,
  "Red",
  "V8",
  10000,
  "Gasoline",
  "Automatic",
  4,
  5600
);

// Викликаємо метод specific з вагою меншою за towingCapacity
myTruck.specific(8000); // Виведе: Тягнення навантаження...

// Викликаємо метод specific з вагою більшою за towingCapacity
myTruck.specific(12000); // Виведе: Н
/*
 * Функція конструктор: ElectricCar
 * Властивості:
 * --------------------------------------
 * | Властивість   |
 * |---------------|
 * | brand         |
 * | model         |
 * | year          |
 * | mileage       |
 * | batteryCapacity|
 */

function ElectricCar(brand, model, year, mileage, batteryCapacity) {
  // Перевіряємо, чи функцію було викликано з new, якщо ні виволимо помилку "Конструктор має бути викликаний з 'new'"
  // Викликаємо Car.call та передаємо в нього this, brand, model, year, mileage
  //  Записуєм в this.batteryCapacity значення аргументу batteryCapacity
  // Перевіряємо, чи функцію було викликано з new, якщо ні, виводимо помилку "Конструктор має бути викликаний з 'new'"
  if (!(this instanceof ElectricCar)) {
    throw new Error("Конструктор має бути викликаний з 'new'");
  }

  // Викликаємо Car.call та передаємо в нього this, brand, model, year, mileage
  Car.call(this, brand, model, year, mileage);

  // Додаємо додаткову властивість для ElectricCar.
  this.batteryCapacity = batteryCapacity;
}

// Перевизначаємо toString для прототипу ElectricCar він має повертати <brand> <model> <year> - Батарея: <batteryCapacity> kWh
ElectricCar.prototype.toString = function () {
  return (
    Car.prototype.toString.call(this) +
    " - Батарея: " +
    this.batteryCapacity +
    " kWh"
  );
};
// Створюємо новий екземпляр ElectricCar
/*
 * Екземпляр об'єкту: ElectricCar
 * Властивості:
 * --------------------------------------
 * | Властивість     | Значення          |
 * |-----------------|-------------------|
 * | brand           | Tesla             |
 * | model           | Model S           |
 * | year            | 2020              |
 * | mileage         | 10000             |
 * | batteryCapacity | 100               |
 */
var tesla = new ElectricCar("Tesla", "Model S", 2020, 10000, 100);
// Викликаємо метод toString об'єкту tesla та виводимо в консоль
console.log(tesla.toString());

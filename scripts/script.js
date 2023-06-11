// Клас Людина
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    console.log(`Ім'я: ${this.name}, Вік: ${this.age}`);
  }
}

// Клас Автомобіль
class Car {
  constructor(brand, model, year, licensePlate) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.licensePlate = licensePlate;
    this.owner = null; // Власник на початку не визначений
  }

  setOwner(owner) {
    if (owner.age >= 18) {
      this.owner = owner;
    } else {
      console.log('Власник повинен бути старше 18 років.');
    }
  }

  getInfo() {
    console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}, Номерний знак: ${this.licensePlate}`);
    if (this.owner) {
      console.log('Інформація про власника:');
      this.owner.getInfo();
    } else {
      console.log('Цей автомобіль не має власника.');
    }
  }
}

// Створення екземплярів класу Людина
const person1 = new Person('Іван', 25);
const person2 = new Person('Марія', 30);

// Створення екземплярів класу Автомобіль
const car1 = new Car('BMW', 'X6', 2014, 'AA1234AA');
const car2 = new Car('Mazda', 'Camry', 2022, 'BB5678ВB');

// Присвоєння власників автомобілям
car1.setOwner(person1); // Власником car1 стає person1
car2.setOwner(person2); // Власником car2 стає person2

// Виведення інформації про автомобілі
car1.getInfo();
console.log('-------------------');
car2.getInfo();

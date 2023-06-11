class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Apartment {
  constructor() {
    this.residents = [];
  }

  addResident(person) {
    this.residents.push(person);
  }
}

class House {
  constructor(maxApartments) {
    this.apartments = [];
    this.maxApartments = maxApartments;
  }

  addApartment(apartment) {
    if (this.apartments.length < this.maxApartments) {
      this.apartments.push(apartment);
    } else {
      console.log("The maximum number of apartments in the house has been reached.");
    }
  }
}

// Creating instances of the Person class
const person1 = new Person("John", "male");
const person2 = new Person("Emily", "female");

// Creating instances of the Apartment class
const apartment1 = new Apartment();
const apartment2 = new Apartment();

// Adding instances of the Person class to instances of the Apartment class
apartment1.addResident(person1);
apartment2.addResident(person2);

// Creating an instance of the House class
const house = new House(2);

// Adding instances of the Apartment class to the instance of the House class.
house.addApartment(apartment1);
house.addApartment(apartment2);

// Константи для розмірів гамбургера
const SIZE_SMALL = {
  price: 50,
  calories: 20
};

const SIZE_LARGE = {
  price: 100,
  calories: 40
};

// Константи для видів начинок
const STUFFING_CHEESE = {
  price: 10,
  calories: 20
};

const STUFFING_SALAD = {
  price: 20,
  calories: 5
};

const STUFFING_POTATO = {
  price: 15,
  calories: 10
};

// Константи для добавок
const TOPPING_SAUCE = {
  price: 15,
  calories: 0
};

const TOPPING_MAYO = {
  price: 20,
  calories: 5
};

class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculatePrice() {
    const toppingsPrice = this.toppings.reduce(
      (totalPrice, topping) => totalPrice + topping.price,
      0
    );

    return this.size.price + this.stuffing.price + toppingsPrice;
  }

  calculateCalories() {
    const toppingsCalories = this.toppings.reduce(
      (totalCalories, topping) => totalCalories + topping.calories,
      0
    );

    
  }
}

// Приклад використання

// Маленький гамбургер з начинкою з сиру
var hamburger = new Hamburger(SIZE_SMALL, STUFFING_CHEESE);

// Добавка з майонезу
hamburger.addTopping(TOPPING_MAYO);

// Запитаємо, скільки там калорій
console.log("Calories: " + hamburger.calculateCalories());

// Скільки коштує
console.log("Price: " + hamburger.calculatePrice());

// Я тут передумав і вирішив додати ще приправу
hamburger.addTopping(TOPPING_SAUCE);

// А скільки тепер коштує???
console.log("Price with sauce: " + hamburger.calculatePrice());

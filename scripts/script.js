class Hamburger {

  static SIZE_SMALL = {
      name: 'SIZE_SMALL',
      price: 50,
      calories: 20,
  }

  static SIZE_BIG = {
      name: 'SIZE_BIG',
      price: 100,
      calories: 40,
  }

  static STUFFING_CHEESE = {
      name: 'STUFFING_CHEESE',
      price: 10,
      calories: 20,
  }

  static STUFFING_SALAD = {
      name: 'STUFFING_SALAD',
      price: 20,
      calories: 5,
  }

  static STUFFING_POTATOES = {
      name: 'STUFFING_POTATOES',
      price: 15,
      calories: 10,
  }

  static TOPPING_SAUCE = {
      name: 'TOPPING_SAUCE',
      price: 15,
      calories: 0,
  }

  static TOPPING_MAYO = {
      name: 'TOPPING_MAYO',
      price: 20,
      calories: 5,
  }

  constructor(size, stuffing) {
      this['sizeFeatures'] = size;
      if (stuffing) {
          this['stuffingFeatures'] = stuffing;
      };
  }

  addTopping(topping) {
      if (!this['toppingFeatures']) {
          this['toppingFeatures'] = [topping];
      } else {
          this['toppingFeatures'].push(topping);
      };
  }

  deleteTopping(topping) {
      const indexOfTopping = this.toppingFeatures ? this.toppingFeatures.indexOf(topping) : -1;

      if (indexOfTopping >= 0) {
          if (this.toppingFeatures.length > 1) {
              this.toppingFeatures.splice(indexOfTopping, 1); 
          } else {
              delete this.toppingFeatures;
          };
      };
  }

  calculateCalories() {

      const toppingCalories = this.toppingFeatures
          ? this.toppingFeatures.reduce((total, topping) => {
              return total + topping.calories;
          }, 0)
          : 0;

      const stuffingCalories = this.stuffingFeatures
          ? this.stuffingFeatures.calories
          : 0;

      return this.sizeFeatures.calories + toppingCalories + stuffingCalories;
  }

  calculatePrice() {
      const toppingPrice = this.toppingFeatures
          ? this.toppingFeatures.reduce((total, topping) => {
              return total + topping.price;
          }, 0)
          : 0;
      
      const stuffingPrice = this.stuffingFeatures
          ? this.stuffingFeatures.price
          : 0;

      return this.sizeFeatures.price + toppingPrice + stuffingPrice;
  }
}

const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

hamburger.deleteTopping(Hamburger.TOPPING_SAUCE);

hamburger.addTopping(Hamburger.TOPPING_MAYO);

console.log(`Calories: ${hamburger.calculateCalories()}`);
console.log(`Price: ${hamburger.calculatePrice()} tugrik`);

hamburger.addTopping(Hamburger.TOPPING_SAUCE);

console.log(`Price with sauce: ${hamburger.calculatePrice()} tugrik`);

console.log(hamburger);

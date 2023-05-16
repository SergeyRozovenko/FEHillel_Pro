const smartphones = {
    apple: ["iphone-10", "iphone-11", "iphone-12"],
    samsung: ["Galaxy A32", "Galaxy A03s", "Galaxy A73 5G"],
    oneplus: ["Nord AC2003", "9 LE2113", "8T KB2003"],
  };
  
  smartphones[Symbol.iterator] = function* () {
    for (const brand of Object.keys(this)) {
      for (const model of this[brand]) {
        yield [brand, model];
      }
    }
  };
  
  for (const smartphone of smartphones) {
    console.log(`${smartphone[0]} - ${smartphone[1]}`);
  }
  
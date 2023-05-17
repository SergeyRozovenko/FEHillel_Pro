const smartphones = {
  apple: ["iphone-10", "iphone-11", "iphone-12"],
  samsung: ["Galaxy A32", "Galaxy A03s", "Galaxy A73 5G"],
  oneplus: ["Nord AC2003", "9 LE2113", "8T KB2003"],
};

smartphones[Symbol.iterator] = function() {
  const brands = Object.keys(this);
  let brandIndex = 0;
  let modelIndex = 0;

  return {
    next: () => {
      if (brandIndex >= brands.length) {
        return { value: undefined, done: true };
      }

      const brand = brands[brandIndex];
      const models = this[brand];
      const model = models[modelIndex];

      modelIndex++;

      if (modelIndex >= models.length) {
        brandIndex++;
        modelIndex = 0;
      }

      return { value: `${brand} - ${model}`, done: false };
    }
  };
};

for (const smartphone of smartphones) {
  console.log(smartphone);
}
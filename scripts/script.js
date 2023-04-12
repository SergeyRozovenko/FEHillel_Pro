function unification(mass) {
    let result = [];
    for (let i = 0; i < mass.length; i++) {
      if (Array.isArray(mass[i])) {
        result = result.concat(unification(mass[i])); 
      } else {
        result.push(mass[i]); 
      }
    }
    return result;
  }
  
  let mass = [[1,2,3, [3.1]], 4, [5,6, [7, 8]]];
  console.log(unification(mass));
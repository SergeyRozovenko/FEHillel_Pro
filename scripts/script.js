function filter(array, callback) {
	const filteredArray = [];
	for (let i = 0; i < array.length; i++) {
	  if (callback(array[i])) {
		filteredArray.push(array[i]);
	  }
	}
	return filteredArray;
  }
  
  const input = [1, 2, 3, 4, 5, 6];
  function isEven(x) { return x % 2 == 0; }
  console.log(filter(input, isEven)); // [2, 4, 6]
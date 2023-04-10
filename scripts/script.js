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
  console.log(filter(input, isEven)); 

//===============TASK 2

  function copy(list, callback) {
	const newList = [];
	for (let i = 0; i < list.length; i++) {
		let element;
		if (callback) {
		  element = callback(list[i]);
		} else {
		  element = list[i];
		}
	  newList.push(element);
	}
	return newList;
  }
  
  const list = [1, 2, 3, 4, 5];
  const newL = copy(list, (value) => value * 10);
  console.log(newL); 

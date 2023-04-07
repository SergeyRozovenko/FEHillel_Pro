function metricsDecorator(callback) {
	return function () {
	  const startTime = performance.now();
	  const result = callback.apply(this, arguments);
	  const endTime = performance.now();
	  console.log(`Function ${callback.name} took ${endTime - startTime} milliseconds to execute.`);
	  return result;
	}
  }

  const sumArray = metricsDecorator((array) => {
  return array.reduce((sum, num) => sum + num, 0);
});

const myArray = [1, 2, 3, 4, 5];
const sum = sumArray(myArray);
console.log(`The sum of the array is ${sum}`);
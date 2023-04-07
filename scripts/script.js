function metricsDecorator(callback) {
	return function () {
	  const startTime = performance.now();
	  const result = callback.apply(this, arguments);
	  const endTime = performance.now();
	  console.log(`Function ${callback.name} took ${endTime - startTime} milliseconds to execute.`);
	  return result;
	}
  }

  const repeat = metricsDecorator((message, times) => {
	for (let i = 0; i < times; i++) {
	  console.log(message);
	}
  });
  
  repeat("Hello, world!", 3);
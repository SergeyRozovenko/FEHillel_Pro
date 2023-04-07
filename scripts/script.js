function metricsDecorator(callback) {
	return function () {
	  const startTime = performance.now();
	  const result = callback.apply(this, arguments);
	  const endTime = performance.now();
	  console.log(`Function ${callback.name} took ${endTime - startTime} milliseconds to execute.`);
	  return result;
	}
  }

  console.log()
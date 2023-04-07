
function average(nums) {
	let sum = 0;
	let count = 0;
  
	for (let i = 0; i < nums.length; i++) {
	  if (typeof nums[i] === 'number') {
		sum += nums[i];
		count++;
	  }
	}
  
	return sum / count;
  }

let nums = [1, 'hello', 2, true, 3, null, 4];
let result = average(nums);
console.log(result);
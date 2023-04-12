function ReverseOrder(n) {
    if (n > 0) {
      console.log(n);
      ReverseOrder(n - 1);
    }
  }
  
  ReverseOrder(5);

  //----------Task 2

  function sumToArray(arr) {
    if (arr.length === 0) {  
      return 0;             
    } else {
      return arr[0] + sumToArray(arr.slice(1)); 
    }
  }
  
  console.log(sumToArray([1, 2]));     
  console.log(sumToArray([1, 2, 3]))

  //--------Task 3

  function factorial(n) {
    if (n === 0) {
      return 1; 
    } else {
      return n * factorial(n-1); 
    }
  }
  
  console.log(factorial(5));
  console.log(factorial(4));
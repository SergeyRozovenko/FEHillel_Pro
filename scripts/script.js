
 
function* getPartsOfWord (string) {
  let partialWord = "" ;
  let nextSymbol = "" ;
  
  for (let i = 0; i < string.length; i++) {
    partialWord += string[i];
    nextSymbol = yield partialWord + nextSymbol;

    if (typeof nextSymbol === "undefined") {
      nextSymbol = "";
    };
  };

  return partialWord;
};

const iterator = getPartsOfWord('hello');

console.log(iterator.next()); 
console.log(iterator.next()); 
console.log(iterator.next('!')); 
console.log(iterator.next()); 
console.log(iterator.next('@')); 
console.log(iterator.next()); 





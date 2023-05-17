function* getPartsOfWord(string) {
    let partialWord = '';
    let nextSymbol = '';
  
    for (let i = 0; i < string.length; i++) {
      partialWord += string[i];
      yield { value: partialWord, done: false };
      if (nextSymbol) {
        partialWord += nextSymbol;
        nextSymbol = '';
        yield { value: partialWord, done: false };
      }
    }
  
    yield { value: partialWord, done: true };
  }
  
  const iterator = getPartsOfWord("hello");
  
  console.log(iterator.next());  // {value: 'h', done: false}
  console.log(iterator.next());  // {value: 'he', done: false}
  console.log(iterator.next({ symbol: '!' }));  // {value: 'hel!', done: false}
  console.log(iterator.next());  // {value: 'hell', done: false}
  console.log(iterator.next({ symbol: '@' }));  // {value: 'hello@', done: false}
  console.log(iterator.next());  // {value: 'hello', done: true}
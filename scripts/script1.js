function* getPartsOfWord(string) {
    let partialWord = '';
    for (let i = 0; i < string.length; i++) {
      partialWord += string[i];
      yield partialWord;
    }
    
  }
  
  let iterator = getPartsOfWord("hello");
  
  console.log(iterator.next());  // {value: 'h', done: false}
  console.log(iterator.next());  // {value: 'he', done: false}
  console.log(iterator.next());  // {value: 'hel', done: false}
  console.log(iterator.next());  // {value: 'hell', done: false}
  console.log(iterator.next());  // {value: 'hello', done: true}
  console.log(iterator.next());  // {value: 'hello', done: true}
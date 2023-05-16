function* getPartsOfWord(string) {
    let partialWord = '';
    for (let i = 0; i < string.length; i++) {
      partialWord += string[i];
      if (string[i] === '!' || string[i] === '@') {
        const symbol = yield partialWord;
        partialWord += symbol;
      }
    }
    yield partialWord;
  }
  
  const iterator = getPartsOfWord('hello');

  console.log(iterator.next());
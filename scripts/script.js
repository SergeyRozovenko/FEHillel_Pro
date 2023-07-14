const sequence1 = [0, 1, 3, 6, 8];
const sequence2 = [0, 2, 3, 6, 7];

function printSequence(sequence) {
  let index = 0;

  function printValue(isNextResolve) {
    console.log(sequence[index++]);

    if (!isNextResolve) {
      throw new Error('Error');
    }
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      printValue(true);
      resolve();
    }, 0);
  })
    .then(() => {
      printValue(true);
      return Promise.resolve();
    }, () => {
      printValue(false);
      return Promise.reject();
    })
    .then(() => {
      printValue(true);
      return Promise.resolve();
    }, () => {
      printValue(false);
      return Promise.reject();
    })
    .then(() => {
      printValue(true);
      return Promise.resolve();
    }, () => {
      printValue(false);
      return Promise.reject();
    })
    .then(() => {
      printValue(true);
      console.log('=======');
      return Promise.resolve();
    }, () => {
      printValue(false);
      return Promise.reject();
    });
}

printSequence(sequence1);
printSequence(sequence2);

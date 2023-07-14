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

  return new Promise((resolve) => {
    setTimeout(() => {
      printValue(true);
      resolve();
    }, 0);
  })
    .then(() => {
      printValue(true);
    })
    .then(() => {
      printValue(true);
    })
    .then(() => {
      printValue(true);
    })
    .then(() => {
      printValue(true);
      console.log('=======');
    })
    .catch(() => {
      printValue(false);
    });
}

printSequence(sequence1);
printSequence(sequence2);

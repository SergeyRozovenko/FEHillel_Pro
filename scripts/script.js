function SuperMath() {
  this.check = function(obj) {
    if (confirm(`Ви хочете зробити дію ${obj.znak} з числами ${obj.X} і ${obj.Y}?`)) {
      if (this.isValidOperator(obj.znak)) {
        this.calculate(obj);
      } else {
        console.log('Введений некоректний оператор!');
      }
    } else {
      obj = this.input();
      this.check(obj);
    }
  };

  this.isValidOperator = function(operator) {
    const validOperators = ['+', '-', '/', '*', '%'];
    return validOperators.includes(operator);
  };

  this.input = function() {
    const newX = this.getNumberInput('Введіть число X:');
    const newY = this.getNumberInput('Введіть число Y:');
    const newZnak = this.getOperatorInput('Введіть математичний оператор (+, -, /, *, %):');
    return { X: newX, Y: newY, znak: newZnak };
  };

  this.getNumberInput = function(message) {
    let input;
    do {
      input = Number(prompt(message));
    } while (isNaN(input));
    return input;
  };

  this.getOperatorInput = function(message) {
    let input;
    do {
      input = prompt(message);
    } while (!this.isValidOperator(input));
    return input;
  };

  this.calculate = function(obj) {
    let result;
    switch (obj.znak) {
      case '+':
        result = obj.X + obj.Y;
        break;
      case '-':
        result = obj.X - obj.Y;
        break;
      case '/':
        result = obj.X / obj.Y;
        break;
      case '*':
        result = obj.X * obj.Y;
        break;
      case '%':
        result = obj.X % obj.Y;
        break;
      default:
        console.log('Введений некоректний оператор!');
        return;
    }
    console.log(`Результат: ${result}`);
  };
}

// Приклад використання
const obj = { X: 12, Y: 3, znak: "/" };
const p = new SuperMath();
p.check(obj);

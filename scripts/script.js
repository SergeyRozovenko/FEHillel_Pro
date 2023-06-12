
function SuperMath() {

  this.check = function(obj, verification) {
      verification = (verification === undefined)
          ? confirm(`Ви хочете зробити дію ${obj.znak} з числами ${obj.X} і ${obj.Y}`)
          : verification;
      
      if(verification) {
          this.operation(obj.X, obj.Y, obj.znak);
      } else {
          this.check(this.input(obj), true);
      };
  };

  this.input = function (obj) {
      obj.X = +prompt('Введіть число X:');
      obj.Y = +prompt('Введіть число Y:');
      obj.znak = prompt('Введіть математичну дію (+, -, /, * або %)');
      return obj;
  };
};

SuperMath.prototype.operation = function(a, b, znak) {
  switch(znak) {
      case '+':
          alert(a + b);
          break;
      case '-':
          alert(a + b);
          break;
      case '/':
          if (b == 0) {
              alert('На 0 не ділится');
              b =  +prompt('Введіть нове значення Y:');
              alert(a / b);
          } else {
              alert(a / b);
          };
          break;
      case '*':
          alert(a * b);
          break;
      case '%':
          if (b == 0) {
              alert('Не ділится на 0, залишок не знайдено.');
              b =  +prompt('Введіть нове значення Y:');
              alert(a % b);
          } else {a
              alert(a % b);
          };
          break;
      };
};

const obj = {
  X: 12,
  Y: 3,
  znak: '+',
};

const p = new SuperMath();

p.check(obj);
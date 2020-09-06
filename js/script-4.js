// переиспользование методов класса
// Напиши класс StringBuilder.На вход он получает один параметр - строку, которую записывает в свойство _value.

// Добавь классу следующий функционал:

// Геттер value - возвращает текущее значение поля _value
// Метод append(str) - получает параметр str(строку) и добавляет ее в конец _value
// Метод prepend(str) - получает параметр str(строку) и добавляет ее в начало value
// Метод pad(str) - получает параметр str(строку) и добавляет ее в начало и в конец _value
// Метод pad должен использовать методы append и prepend

class StringBuilder {
  constructor(value) {
    this._value = value;
  }
  get value() {
    return this._value;
  }
  append(str) {
    this._value = this._value + str;
    return this._value;
  }
  prepend(str) {
    this._value = str + this._value;
    return this._value;
  }
  pad(str) {
    this._value = this.append(str);
    this._value = this.prepend(str);
    return this._value;
  }
}

console.log(typeof StringBuilder);
// 'function'

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='

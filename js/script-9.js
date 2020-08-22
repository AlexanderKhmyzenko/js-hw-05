// Есть массив logins с логинами пользователей.
// Напиши скрипт добавления логина в массив logins.Добавляемый логин должен:

// проходить проверку на длину от 4 до 16 - ти символов включительно
// быть уникален, то есть отсутствовать в массиве logins
// Разбей задачу на подзадачи с помощью функций.
// Проверку на отсутствие аргументов или на правильный тип аргументов делать не нужно.

// Напиши функцию isLoginValid(login), в которой проверь количество символов параметра login
// и верни true или false в зависимости от того,
// попадает ли длина параметра в заданный диапазон от 4 - х до 16 - ти символов включительно.

// Напиши функцию isLoginUnique(allLogins, login),
// которая принимает список всех логинов и добавляемый логин как параметры
// и проверяет наличие login в массиве allLogins,
// возвращая true если такого логина еще нет и false если логин уже используется.

// Напиши функцию addLogin(allLogins, login) которая:

// Принимает новый логин и массив всех логинов как параметры
// Проверяет валидность логина используя вспомогательную функцию isLoginValid
// Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку
// 'Ошибка! Логин должен быть от 4 до 16 символов'
// Если логин валиден, функция addLogin проверяет уникальность логина с помощью функции isLoginUnique
// Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и возвращает строку
// 'Такой логин уже используется!'
// Если isLoginUnique вернет true, addLogin добавляет новый логин в logins и возвращает строку
// 'Логин успешно добавлен!'
// 🔔 Принцип единственной ответственности функции - каждая функция делает что - то одно.
// Это позволяет переиспользовать код и изменять логику работы функции только в одном месте,
// не затрагивая работу программы в целом.

// Предикатные функции возвращают только true или false.
// Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.

// isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false.
// isLoginValid только проверяет валидный ли логин и возвращает true или false.
// addLogin добавляет или не добавляет логин в массив.
// При этом для проверок условия добавления использует результаты вызовов других функций - isLoginUnique и isLoginValid.

// function isLoginValid(login, min = 4, max = 16) {
//   // Write code under this line
//   let isLoginValid = false;
//   if (login.length >= min && login.length <= max) {
//     isLoginValid = true;
//   }
//   return isLoginValid;
// }
// function isLoginUnique(allLogins, login) {
//   "use strict";
//   // Write code under this line
//   let isLoginUnique = true;
//   for (const element of allLogins) {
//     if (login === element) {
//       isLoginUnique = false;
//     }
//   }
//   return isLoginUnique;
// }
// function addLogin(allLogins, login) {
//   "use strict";
//   const SUCCESS = "Логин успешно добавлен!";
//   const REFUSAL = "Такой логин уже используется!";
//   const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
//   let message;
//   // Write code under this line
//   if (isLoginValid(login)) {
//   } else {
//     message = ERROR;
//     return message;
//   }
//   if (isLoginUnique(allLogins, login)) {
//     allLogins.push(login);
//     message = SUCCESS;
//     //console.log(message);
//   } else {
//     message = REFUSAL;
//     //console.log(message);
//   }
//   return message;
// }
// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
// const logins = ["1234", "12345"];
// console.log(addLogin(logins, "789"));

function isLoginValid(login, min = 4, max = 16) {
  let isLoginValid = login.length >= min && login.length <= max;
  return isLoginValid;
}

function isLoginUnique(allLogins, login) {
  "use strict";
  let isLoginUnique;
  if (allLogins.includes(login)) {
    isLoginUnique = false;
    return isLoginUnique;
  }
  isLoginUnique = true;
  return isLoginUnique;
}

function addLogin(allLogins, login) {
  "use strict";
  const SUCCESS = "Логин успешно добавлен!";
  const REFUSAL = "Такой логин уже используется!";
  const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
  let message;
  if (!isLoginUnique(allLogins, login) === true) {
    message = REFUSAL;
    return message;
  } else if (isLoginValid(login) === false) {
    message = ERROR;
    return message;
  } else {
    allLogins.push(login);
    message = SUCCESS;
    return message;
  }
}

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

console.log(addLogin(logins, "Ajax"));
// 'Логин успешно добавлен!'

console.log(addLogin(logins, "robotGoogles"));
// 'Такой логин уже используется!'

console.log(addLogin(logins, "Zod"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, "jqueryisextremelyfast"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

'use strict';
// ! 1.Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
let block = 'hidden';
if(block === 'hidden') {
  block = 'visible'
} else {
  block = 'hidden'
}

console.log(block);

// ! 2.Используя if, записать условие:
// ! a.если переменная равна нулю, присвоить ей 1;
// ! b.если меньше нуля - строку “less then zero”;
// ! c.если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
let res = 2;
if(res === 0) {
  res = 1;
} else if (res < 0) {
  res = 'less then zero'
} else if (res > 0) {
  res *= 10;
}

console.log(res);

// ! 3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
// ! Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте
// ! car изменить на true; иначе изменить на false.
let car = {
  name: 'Lexus',
  age: 4,
  create: 2008,
  needRepair: false
}

if (car.age > 5) {
  console.log('Need Repair');
  car.needRepair = true;
} else {
  car.needRepair = false;
};

console.log(car);

// ! 4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
// ! Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не
// ! NaN то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что
// ! поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто
// ! поле price в консоль.

let item = {
  name: 'Intel core i7',
  price: '100$',
  discount: '15%'
}

console.log('Не решено!');

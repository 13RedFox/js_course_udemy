'use strict';

let string = 'some test string';

// ! 1. Получить первую и последнюю буквы строки
console.log('1:', string[0], string[15]);

// ! 2. Сделать первую и последнюю буквы в верхнем регистре
let stringSlice = string.slice(1, 15);
let firstLiter = string[0].toUpperCase();
let endLiter = string[15].toUpperCase();
let fullString = firstLiter + stringSlice + endLiter
console.log('2:', fullString);

// ! 3. Найти положение слова ‘string’ в строке

console.log('3:', string.indexOf('string'));

// ! 4. Найти положение второго пробела (“вручную” ничего не считать)
console.log('4:', string.lastIndexOf(' ') );

// ! 5. Получить строку с 5-го символа длиной 4 буквы
console.log('5:', string.substr(5,[4]));

// ! 6. Получить строку с 5-го по 9-й символы
console.log('6:', string.slice(5, 9));

// ! 7. Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)
console.log('7:', string.slice(0, -6));

// ! 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”

let a = 20;
let b = 16;

string = String(a) + String(b);

console.log('8:', string );

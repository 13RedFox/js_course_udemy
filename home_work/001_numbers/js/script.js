'use strict';

// ! 1. Получить число pi из Math и округлить его до 2-х знаков после точки.
const PI = Math.PI.toFixed(2);
console.log(PI);

// ! 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
const minNumber = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
const maxNumber = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
console.log('Минимальное число: ', minNumber);
console.log('Максимальное число: ', maxNumber);

// ! 3. Работа с Math.random:
// *    a. Получить случайное число и округлить его до двух цифр после запятой
let randomNumbersA = Math.random().toFixed(2);
console.log(randomNumbersA);

// *    a. Получить случайное целое число от 0 до X. X - любое произвольное число.
let randomNumbersB = Math.random() * 10;
let fullNumber = Math.round(randomNumbersB);
console.log(fullNumber);

// ! 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
console.log((0.6 * 10 + 0.7 * 10) / 10);

// ! 5. Получить число из строки ‘100$’
console.log(parseFloat('100$'));
// ! 1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)

function multyply() {
  let num = 1;
  if(arguments.length === 0) return 0;
  for(let i = 0; i < arguments.length; i++)  num *= arguments[i];
  return num;
}

console.log(multyply(1,2,3));

// ! 2. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.

function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('hello'))


'use strict';

let obj = {};
// ! 1. Создать объект с полем product, равным ‘iphone’
obj.product = 'iphone';

// ! 2. Добавить в объект поле price, равное 1000 и поле currency, равное 'dollar'
obj.price = 1000;
obj.currency = 'dollar';

// ! 3. Добавить поле details, которое будет содержать объект с полями model и color
obj.details = {};
obj.details.model = '7 plus';
obj.details.color = 'black';

console.log(obj);

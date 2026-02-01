/* eslint-disable @typescript-eslint/no-unused-vars */
const order = "Order#1456; date=2026-01-26 09:07:05; amount=15.3";
const elementsOrder = order.split("; ");

const numberOrder = order.substring(6, 10);

const day = order.substring(25, 27);
const month = order.substring(22, 24);
const year = order.substring(17, 21);

const hours = order.substring(28, 30);
const minutes = order.substring(31, 33);

const stringSum = order.substring(45, 49);
const sum = parseFloat(stringSum);
const roundeSum = Math.ceil(sum);

const result = `Заказ № ${numberOrder} от ${day}/${month}/${year} ${hours}:${minutes} на сумму ${roundeSum} рублей`;
console.log(result);
// преобразовать строку в формат:
// Заказ № 1456 от 26/01/2026 09:07 на сумму 16 рублей

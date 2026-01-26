//Вывести сегодняшнюю дату в формате:
//День/Месяц/Год Часы:Минуты:Секунду - Например 02/05/2026 22:15:30
const datenow = new Date();
const day = datenow.getDate();
const month = (datenow.getMonth() + 1).toString().padStart(2, "0");
const year = datenow.getFullYear();
const hours = datenow.getHours();
const minutes = datenow.getMinutes();
const seconds = datenow.getSeconds();
console.log(`${day}/${month}/${year} ${hours}:${minutes}:${seconds}`);
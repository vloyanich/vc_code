
//ДЗ 10.1. Параноя



var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test1.2test.test3@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitroporohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
]; 

// 1) За допомогою регулярного виразу створіть масив з адресами, гідними довіри 
//    - зареєстрованих на доменах gmail.com та yahoo.com.

let emails0 = arr[0]
let emails1 = arr[1]
let emails2 = arr[2]
let emails = emails0.email + " " + emails1.email + " " +  emails2.email
console.log(emails, typeof emails);

var pattern = /[a-zA-Z0-9.]+(@gmail\.com)|[a-zA-Z0-9.]+(@yahoo\.com)/g;
console.log(emails + ': ' + emails.search(pattern)); 
var matches = emails.match(pattern); 
console.log("масив з адресами, гідними довіри - зареєстрованими на доменах gmail.com та yahoo.com : " + matches) 


// 2) зробити просту валідацію до @ - одне, або два слова які можуть містити 
//    (латинські букви, цифри) яке може бути розділене крапкою.


var pattern2 = /[a-zA-Z0-9]+\.[a-zA-Z0-9]+(@gmail\.com)|[a-zA-Z0-9]+\.[a-zA-Z0-9]+(@yahoo\.com)|[a-zA-Z0-9]+(@gmail\.com)|[a-zA-Z0-9]+(@yahoo\.com)/g;
var matches2 = emails.match(pattern2); 
console.log("одне, або два слова які можуть містити (латинські букви, цифри) i які можуть бути розділені крапкою : " + matches2) 
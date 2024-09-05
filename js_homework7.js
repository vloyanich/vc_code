

/* Опис ДЗ: Напишіть регулярний вираз, який знайде

послідовність з шести або більше символів, які не містять літери «А» (великої або малої)
Приклад виконання:
Повинен знаходити: Wonderful, Joyful
Не повинен знаходити: Happiness, Time, Task, Apple */

var str1 = "Wonderfula, Joyful";
var str2 = "Happiness, Time, Task, Apple";
var pattern = /[^aA ]{6,}/g;
console.log(str1 + ': ' + str1.search(pattern)); // Знайшли
console.log(str2 + ': ' + str2.search(pattern)); // Не знайшли  
var matches = str1.match(pattern); //match  використовується для знаходження відповідностей між регулярним виразом і рядком і повертає масив знайдених збігів
console.log(matches) 
var matches = str2.match(pattern); //match  використовується для знаходження відповідностей між регулярним виразом і рядком і повертає масив знайдених збігів
console.log(matches) 

/* function sumOfNumbers(n) {
    let sum = 0;

    for (let i = 0; i <= n; i++) { 
         
        sum=sum+i
       }
   
    return sum;
  }
  
  console.log("Сума чисел: " + sumOfNumbers(5)); */



/*   function isEven(number) {
    if (number % 2 === 0) {
    return true;
} else {
    return false
}
 }
 
 const number = 8
;
 console.log(`Число ${number} парне: ${isEven(number)}`); */ 





/* var  z=0
k2=0
k1=0
   function random(min, max, n) {
  
     for (let i = 1; i <= n; i++) { 
        z=min + Math.random() * (max - min);
        q=z.toFixed(0)
   

    if (q % 2) {console.log('непарне: ' + q); 
      ++k1;}
   else {console.log('парне: ' + q); ++k2;}
   
     }
     return q;
   }


console.log(random(100, 1000.0000000000000000000000000000000000000000000000000000000001, 5));
console.log(k1 + " непарних");
console.log(k2 + " парних"); */


/* function pow(x,y)  {
    
    var z=1;   
    for (let i = 1; i <= y; i++) { 
         
         z=z*x
          console.log(z);
        }
    console.log(`x = ${x}`);
    console.log(`y = ${y}`);
    return z; 
      
    } 
const result = pow(2,3);
console.log(`x в степені y = ${result}`) */

/* var  z=0
var  k2=0
var  k1=0
var k=0
   function random(min, max, n) {
  k=n
  console.log('кількість випадкових чисел:' + k)
     for (let i = 1; i <= n; i++) { 
        z=min + Math.random() * (max - min);
        q=z.toFixed(0)
   

    if (q % 2) {console.log('непарне: ' + q); 
      ++k1;}
   else {console.log('парне: ' + q); ++k2;}
   
     }
     return q;
   }

console.log(random(100, 1000.0000000000000000000000000000000000000000000000000000000001, 6));
console.log(k1 + " непарних");
console.log(k2 + " парних");
let x=k1*100/k
console.log(x + "% - відсоток непарних");
let y=k2*100/k
console.log(y + "% - відсоток парних"); */




/* 


var  z=0
var  k2=0
var  k1=0
var k=0
var q=0

function checkProbabilityTheory(count) {

    console.log('кількість випадкових чисел:' + count);
    k=count;
    for (let i = 1; i <= k; i++) { 
        z=100 + Math.random() * (1000.0000000000000000000000000000000000000000000000000000000001 - 100);
       // q=z.toFixed(0);
       q=
    if (q % 2) {console.log('непарне: ' + q); 
      ++k1;}
   else {console.log('парне: ' + q); ++k2;}
    
}}

const result = checkProbabilityTheory(5);


console.log(k1 + " непарних");
console.log(k2 + " парних");
let x=k1*100/k
console.log(x + "% - відсоток непарних");
let y=k2*100/k
console.log(y + "% - відсоток парних");  */

/* function randomInteger(min, max) {
    // тепер rand від (min - 0.5) до (max + 0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

console.log(randomInteger(100, 1000)); */




/* var  z=0
var  k2=0
var  k1=0
var k=0
var q=0


function checkProbabilityTheory(count) {

    console.log('кількість випадкових чисел:' + count);
    k=count;
}

console.log()

for (let i = 1; i <= k; i++) { 
    function randomInteger(min=100, max=1000) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
     
        return intRand=Math.round(rand);;
    };
        
    if (randomInteger() % 2) {console.log('непарне: ' + intRand); 
      ++k1;}
   else {console.log('парне: ' + intRand); ++k2;}
    
}

const result = checkProbabilityTheory(5);

console.log(k1 + " непарних");
console.log(k2 + " парних");
let x=k1*100/k
console.log(x + "% - відсоток непарних");
let y=k2*100/k
console.log(y + "% - відсоток парних"); */


/* 
console.log(Number.isSafeInteger(42)); // Виведе true
console.log(Number.isSafeInteger(Math.pow(2, 53))); */

/* function convertToUpperCase(inputString) {
    var upperCaseStr = inputString.toUpperCase();
    console.log(upperCaseStr); 
    return upperCaseStr;
    }
    const result = convertToUpperCase("dsfgsdg");
    
    console.log(result);
     */


/* 
   function customToString(number) {
        var str = number.toString();
        return str;
        }
        const result = customToString(45);
            
        console.log(result, typeof result);


        var str = "42.75";
        var num = Number.parseInt(str);
        console.log(num, typeof num);
        */
/* 
        var str = "3.14ddd";
        var num = Number.parseFloat(str);
        console.log(num, typeof num);  */


/* var your_age = "undefined";
var your_age = "20";
if (isNaN(your_age)) {
    console.log("Age is invalid. Please enter a valid number.");
} else {
    console.log("Your age is " + your_age + "."); */

/* 
console.log(Number.parseInt('12.45'));
console.log(Number.parseInt('12.3.4'));
console.log(Number.parseInt('12px'));
console.log(Number.parseInt('a123'));
console.log(Number.parseInt('11', 2)); // Двійкова система
console.log(Number.parseInt('ff', 16));
console.log(Number.parseInt('100', 32)); */


/* console.log("floor: из 3.6 до " + Math.floor(3.6)); //округлює число  вниз до найближчого меншого цілого числа
console.log('ceil: из 3.1 до ' + Math.ceil(3.1)); // округлює число  вгору до найближчого меншого цілого числа
console.log('round: из 3.4 до ' + Math.round(3.4)); // до найближчого цілого числа
console.log('round: из 3.7 до ' + Math.round(3.7)); // до найближчого цілого числа

 */
/* 
var rnd = Math.random();
console.log(rnd)
rnd *= 10;
console.log(rnd)
rnd = Math.round(rnd);
console.log(rnd)
 */


/* function random(min, max) {
    return min + Math.random() * (max - min);
}

console.log(random(1, 5)); */

/* 
function randomInteger(min, max) {
    // тепер rand від (min - 0.5) до (max + 0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

console.log(randomInteger(5, 20)); */


/* const person = {
    "first name": "John",
    "last name": "Doe"
  };
  const lastName = person["last name"]; // Отримання значення через квадратні дужки
  console.log(lastName); // Результат: "Doe"
 */

/* 
const person = {};
const key = "age";
const value = 30;
person[key] = value;

console.log(person); */

/* const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
  };
  
  const keys = Object.keys(person);
  console.log(keys); // Результат: ["firstName", "lastName", "age"]
  console.log(Object.keys(person).length)
  console.log(Object.entries(person))
 */


/*   const book = {
    title : "Кобзар" ,
    author : "Т.Г.Шевченко",
    year : 2024,
   
   // getInfo() {for (let i in book) {console.log (i + ' : ' + book[i]);}}
} ;

book.getInfo = function  getInfo() {for (let i in book) {console.log (i + ' : ' + book[i]);}}

book.getInfo()
console.log ("-----")

book.newProperty  = "Нова властивість"  

book.getInfo() */

/* 
let sum = 0
let max = 0
let min = 10000
var services = { 
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",

}

services.price = function  price() {
        for (let i in services) {
            if (Number.parseInt(services[i]) > 0) { 
        sum = sum + Number.parseInt(services[i])  
       // console.log (sum);
    }}}

 
services.maxPrice = function  maxPrice() {
            for (let k in services) {
           if (Number.parseInt(services[k]) > max) {max = Number.parseInt(services[k])} ;  
            }}

services.minPrice = function  minPrice() {
                for (let q in services) {
               if (Number.parseInt(services[q]) < min) {min = Number.parseInt(services[q]);
                 } ;  
                }}
   



services['Розбити скло'] = "200 грн";
//services['Розбити скло_2'] = "20 грн";

services.price();
console.log ("Sum " + sum);

 services.maxPrice();
console.log ("MaxPrice " + max);

services.minPrice();
console.log ("MinPrice " + min);

 */





/* let str = "DataTypes";
let letter = str[1]; 
console.log(letter);  //    a
/*

 let text = "Джаваскріпт - це цікаво";
let length = text.length;
console.log(length);  //23


var result = "qwerty"/0;
console.log(nan) //ReferenceError: nan is not defined

var guessWho = 3.14;
guessWho = 'А тепер тут строка';
guessWho = false;
guessWho = 8.97;
console.log(guessWho) //8.97


const num = 68;
const str1 = "Borsh";
const result = num + str1; 
console.log(result) */ //68Borsh



/* 

var result = "30" - 3;
console.log(result);  // 27


let n = 5;
 n *= 4 + 9;
 console.log(n);  //65



var a = 9;
var b = 7;
var c = a = b;
console.log(c) //7


var number = 80;
number % = 5;
console.log(number); //SyntaxError: Unexpected token '='


console.log(3 !== '03'); //true


console.log((+undefined)); /NaN
 */









/* 
let sex = 'female';
let birthday = 29;
let discount;
if (sex === 'male'){
    discount = (birthday >= 25 ) ? "30%" : "10%";
} else if (sex === 'female'){
    discount = (birthday === 19) ? "30%" : "10%";
} else {
    discount = (birthday === 7) ? "10%" : "5%";
} 
console.log(discount) //10%



console.log( 1 && 2 && null && 3 && undefined); //null


console.log( (null || -1 && 1)  ); //1
/* 

// Яке буде останнє значення?
var i = 0;
do {
    i += 4;
    console.log("i = " + i);
} while (i < 11); //12
 */


/* // Яке буде останнє значення?
var i = 0;
do {
    i += 4;
    console.log("i = " + i);
} while (i < 11);
 */ 





//* Завдання 1:

//Вирахуйте значення площі трапеції на основі наданих значень.
//Виведіть результат 

//Формула: https://www.elitclass.com.ua/components/com_jshopping/files/img_products/full_a91.jpg


/* var a = 6; // перша основа
var b = 9; // друга основа
var h = 4; // висота
var s=0;

s=((a+b)/2)*h;
console.log (s) // 30 */


/* 
let productPrice1 = 101.5; // ціна 1го продукту
let productPrice2 = 50.25; // ціна 2го продукту
let productPrice3 = 10.11; // ціна 3го продукту

let productQuantity1 = 5;  // кількість одениць 1го продукту на складі 
let productQuantity2 = 9;  // кількість одениць 2го продукту на складі 
let productQuantity3 = 15; // кількість одениць 3го продукту на складі 

let S=0
S=((productPrice1*productQuantity1) +(productPrice2*productQuantity2) + (productPrice3*productQuantity3))/ (productQuantity1+productQuantity2+productQuantity3)
console.log (S)  // 38.324137931034485
 */



/* var grade = prompt("Введіть вашу оцінку (A, B, C, D, або F)");

switch (grade) {
    case   "A"  :    alert("Відмінно")  ; break;
    case   "B"  :    alert("Добре")  ; break; 
    case   "C"  :    alert("Задовільно")  ; break;
    case   "D"  :    alert("Незадовільно")  ; break;
    case   "F"  :    alert("Не склав")  ; break;
    default   :  "Невірно введена оцінка"   ;
} */

/* 
if (grade == "A") {
    alert("Відмінно");
} else if (grade == "B") {
    alert("Добре");
} else if (grade == "C") {
    alert("Задовільно");
} else if (grade == "D") {
    alert("Незадовільно");
} else if (grade == "F") {
    alert("Не склав");
} else {
    alert("Невірно введена оцінка");
} */




    /* Завдання 4:

За допомогою цикла for виведіть всі числа котрі діляться на 4 між 0 и 50 

*/
/* 
for (let i=1; i<=50; i++) {
if (i % 4 ==0) {console.log (i)}
} */



/* Завдання 5:

Створіть функцію min(a, b), яка повертає менше число з чисел а и b без використання бібліотеки Math

*/
//function (a,b) {}

var arr = [
    { name: "John Snow", age: 45 },
    { name: "Cersei Lannister", age: 32 },
    { name: "Daenerys Targaryen", age: 18 },
    { name: "Jorah Mormont", age: 28 }
  ];
  
  console.log(arr.find((el) => {
    return el.age === 18;
  }))



  function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
  }
  
  const number = 5;
  console.log(`Факторіал ${number} дорівнює ${factorial(number)}`);
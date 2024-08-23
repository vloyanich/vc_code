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


  const book = {
    title : "Кобзар" ,
    author : "Т.Г.Шевченко",
    year : 2024,
   
   // getInfo() {for (let i in book) {console.log (i + ' : ' + book[i]);}}
} ;

book.getInfo = function  getInfo() {for (let i in book) {console.log (i + ' : ' + book[i]);}}

book.getInfo()
console.log ("-----")

book.newProperty  = "Нова властивість"  

book.getInfo()

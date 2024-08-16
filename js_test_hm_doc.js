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




var  z=0
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
console.log(y + "% - відсоток парних");
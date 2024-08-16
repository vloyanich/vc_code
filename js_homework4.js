//js_homework4


var  z=0
var  k2=0
var  k1=0
var k=0
var q=0

function checkProbabilityTheory(count) {

    console.log('кількість випадкових чисел:' + count);
    k=count;
    for (let i = 1; i <= k; i++) { 
        z=(100 - 0.5 + Math.random() * (1000 - 100 + 1));
        q=Math.round(z);
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
console.log(y + "% - відсоток парних");


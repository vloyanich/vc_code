/* function sumOfNumbers(n) {
    let sum = 0;

    for (let i = 0; i <= n; i++) { 
         
        sum=sum+i
       }
   
    return sum;
  }
  
  console.log("Сума чисел: " + sumOfNumbers(5)); */



  function isEven(number) {
    if (number % 2 === 0) {
    return true;
} else {
    return false
}
 }
 
 const number = 8
;
 console.log(`Число ${number} парне: ${isEven(number)}`);
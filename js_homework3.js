//js_homework3 


/* let x=2, y =4, z=1
  for (let i = 1; i <= y; i++) { 
    z=z*x
    console.log(z);
   }  */


 function pow(x,y)  {
    
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
console.log(`x в степені y = ${result}`)

  


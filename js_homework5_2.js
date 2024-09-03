//js_homework5_2

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
        sum = sum + Number.parseInt(services[i]);  
       //console.log (sum);
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



const book = {
    title : "Кобзар" ,
    author : "Т.Г.Шевченко",
    year : 2024
}
   /* getInfo() {for (let i in book)} { if (book[i]) > 0  } 
    
    {console.log (i + ' : ' + book[i]);}}
 */

book.getInfo = function  getInfo() {for (let i in book) { if (typeof book[i] != "function" ) console.log (i + ' : ' + book[i]);}}

book.getInfo()
console.log ("-----")

book.newProperty  = "Нова властивість"  

book.getInfo()



var grade = prompt("Введіть вашу оцінку (A, B, C, D, або F)");

switch (grade) {
    case   "A"  :    alert("Відмінно")  ; break;
    case   "B"  :    alert("Добре")  ; break; 
    case   "C"  :    alert("Задовільно")  ; break;
    case   "D"  :    alert("Незадовільно")  ; break;
    case   "F"  :    alert("Не склав")  ; break;
    default   :  "Невірно введена оцінка"   ;
}
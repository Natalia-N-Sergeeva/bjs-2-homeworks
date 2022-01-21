'use strict'
function solveEquation(a, b, c) {
  let arr;
  let D = Math.pow(b, 2)-4*a*c;
  let x = -b/(2*a);
  let x1 = (-b + Math.sqrt(D) )/(2*a);
  let x2 = (-b - Math.sqrt(D) )/(2*a);
  if (D == 0) {
   arr = [x]; 
  } else if (D > 0) {
    arr = [x1, x2];
  } else {
    arr = [];
  }
  return arr;
}  



function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}

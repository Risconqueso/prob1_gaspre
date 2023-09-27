/*2.- Escribe un programa que tome como parámetro un número entero y regrese una lista (array) con
todos los factores primos del número pasado como argumento. Considera los siguientes ejemplos.
(4 pts)
//Salida
primeFactors(20) // [2, 2 ,5] es decir, 2*2*5 = 20
primeFactors(330) // [2, 3, 5, 11] es decir, 2*3*5*11 = 330 */

function primeFactors(n) {
  const factors = [];
  let divisor = 2;

  while (n > 1) {
    if (n % divisor === 0) {
      factors.push(divisor);
      n /= divisor;
    } else {
      divisor++;
    }
  }

  return factors;
}

console.log(primeFactors(20));
console.log(primeFactors(330));

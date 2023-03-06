const Test = require('./test/Test.js');

/**
 * Fonction de calcule de la factorielle d'un nombre
 * @param pNumber
 * @return Number
 */

/**OLD VERSION */
// function factorial(pNumber = 0) {
//   if (pNumber === 0 || pNumber === 1) return 1;

//   for (let i = pNumber - 1; i >= 1; i--) {
//     pNumber = pNumber * i;
//   }
//   return pNumber;
// }

/**NEW VERSION */
const factorial = (pNumber = 0) => {
  if (pNumber < 0) return -1;
  if (pNumber === 0) return 1;
  return pNumber * factorial(pNumber - 1);
};

Test.assert('factoriel 1', 2, factorial(2));
Test.assert('factoriel 1', 120, factorial(5));
Test.assert('factoriel 1', 3628800, factorial(10));

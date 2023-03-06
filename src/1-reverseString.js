const Test = require('./test/Test.js');

/**
 * Fonction permettant d'inverser une chaîne de caractère
 * @param pString
 * @return string
 */

/**OLD VERSION */
// function reverseString(pString = '') {
//   let strOutput = "";
//   for(let i = pString.length - 1; i>= 0; i--){
//     strOutput += pString[i]
//   }
//   return strOutput
// }

/**NEW VERSION */
const reverseString = (pString = '') => pString.split('').reverse().join('');

Test.assert('reverseString 1', 'essuomelepmaP', reverseString('Pampelemousse'));
Test.assert('reverseString 2', '0987654321', reverseString('1234567890'));
Test.assert(
  'reverseString 3',
  "looc tse'c tpircsavaJ",
  reverseString("Javascript c'est cool")
);

module.exports = { reverseString };

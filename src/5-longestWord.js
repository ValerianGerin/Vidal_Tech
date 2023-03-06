const Test = require('./test/Test.js');

/**
 * Fonction permettant d'identifier et de renvoyer le premier mot le plus long d'une chaine de caractère
 * @param pString
 * @return string
 */

/**OLD VERSION */
// function longestWord(pString = '') {
//     let splitedStr = pString.split(" ");
//     let longest = 0;
//     let word = "";

//     splitedStr.forEach(function(str) {
//         if (longest < str.length) {
//             longest = str.length;
//             word = str;
//         }
//     });
//     return word;
// }

/**NEW VERSION */
const longestWord = (pString = '') => {
  return pString.split(' ').reduce((longestWord, currentWord) => {
    return currentWord.length > longestWord.length ? currentWord : longestWord;
  }, '');
};

Test.assert(
  'longestWord 1',
  'javascript',
  longestWord('Hello world javascript')
);
Test.assert(
  'longestWord 2',
  'quatre',
  longestWord('un deux trois quatre cinq six')
);
Test.assert('longestWord 3', 'feuille', longestWord('pierre feuille ciseaux'));

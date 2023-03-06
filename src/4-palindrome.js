const Test = require('./test/Test.js');
const { reverseString } = require('./1-reverseString');

/**
 * Fonction permettant de déterminer si la chaine passée en paramètre est un palindrome
 * @param pString
 * @return boolean
 */

const isPalindrome = (pString = '') => pString === reverseString(pString);

Test.assert('isPalindrome 1', true, isPalindrome('rever'));
Test.assert('isPalindrome 2', false, isPalindrome('palindrome'));
Test.assert('isPalindrome 3', true, isPalindrome('ressasser'));

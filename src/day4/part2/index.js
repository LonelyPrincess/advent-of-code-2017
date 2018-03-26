/**
 * --- Day 4: High-Entropy Passphrases - Part II ---
 *
 * This function checks whether the string passed as a parameter is a valid
 * passphrase or not. A valid passphrase must include over one word separated
 * by spaces, with all of these words being different from one another.
 * Anagrams count as a duplicate word, so a passphrase including any is also invalid.
 *
 * @author Sara Hernández <sara.her.su@gmail.com>
 *
 * @param {string} input - A string representing the passphrase to check.
 * @return {boolean}
 */
const isValidPassphrase = function (input = "") {
  const words = input.split(" ");

  if (words.length < 2) {
    console.log(`Input must contain more than one word.`);
    return false;
  }

  const wordStructureList = [];
  for (const word of words) {
    currentWordStructure = getWordStructure(word);

    for (let wordStructure of wordStructureList) {
      if (isAnagramOf(currentWordStructure, wordStructure)) {
        return false;
      }
    }

    wordStructureList.push(currentWordStructure);
  }

  return true;
};

/**
 * This method counts the number of appearances for each of the characters
 * that form the word and returns an object with said data.
 *
 *  - Example: For the string 'ada', this returns { 'a': 2, 'd': 1 }
 *
 * @param {string} word
 * @return {object} - Number of appearances for each character in word.
 */
const getWordStructure = function (word) {
  var wordStructure = {};

  word.split("").map((char) => {
    if (wordStructure.hasOwnProperty(char)) {
      wordStructure[char]++;
    } else {
      wordStructure[char] = 1;
    }
  });

  return wordStructure;
};

/**
 * This method checks whether the first word is an anagram of the second one.
 *
 * @param {object} currentWordStructure - The structure of the word we want
 *  to know whether it's an anagram of the other or not.
 * @param {object} otherWordStructure - The structure of the word to check
 *  against.
 * @return {boolean}
 */
const isAnagramOf = function (currentWordStructure, otherWordStructure) {

  // If number of characters is different, we're not in an anagram
  if (Object.keys(currentWordStructure).length !== Object.keys(otherWordStructure).length) {
    return false;
  }

  // Check if any of the characters is different or the count doesn't match
  for (let char in currentWordStructure) {
    if (!currentWordStructure.hasOwnProperty(char) || currentWordStructure[char] !== otherWordStructure[char]) {
      return false;
    }
  }

  return true;
};

module.exports = isValidPassphrase;

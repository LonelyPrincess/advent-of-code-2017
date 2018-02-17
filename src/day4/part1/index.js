/**
 * --- Day 4: High-Entropy Passphrases - Part I ---
 *
 * This function checks whether the string passed as a parameter is a valid
 * passphrase or not. A valid passphrase must include over one word separated
 * by spaces, with all of these words being different from one another.
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

  const wordIndex = {};
  for (const word of words) {
    if (wordIndex.hasOwnProperty(word)) {
      console.log(`Input contains duplicate word '${word}'`);
      return false;
    } else {
      wordIndex[word] = null;
    }
  }

  return true;
};

module.exports = isValidPassphrase;

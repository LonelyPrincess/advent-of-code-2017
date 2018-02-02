/**
 * --- Day 1: Inverse Captcha - Part II ---
 *
 * This module contains a method that review a sequence of digits and find
 * the sum of all digits that match the digit halfway around the circular list.
 *
 * @author Sara Hernández <sara.her.su@gmail.com>
 *
 * @param {string} input - A string representing a numeric value.
 * @return {number} - Sum of digits that match the next in the list.
 */
const solveCaptcha = function (input = "") {
  const sequence = getDigitSequence(input);

  if (!sequence) {
    console.error(`Invalid input! Make sure it doesn't contain non-numeric values.`);
    return null;
  }

  if (sequence.length % 2 !== 0) {
    console.error(`Invalid input! The sequence must have an even number of digits.`);
    return null;
  }

  let result = 0;
  for (let i = 0; i < sequence.length; i++) {
    const nextIndex = getNextIndex(i, sequence.length);
    if (sequence[i] === (sequence[nextIndex])) {
      result += sequence[i];
    }
  }

  return result;
};

/**
 * Obtains the index of the digit halfway in the circular list.
 * @param {number} currentIndex - Position in the sequence for current digit.
 * @param {number} seqLength - Number of elements in sequence.
 * @return {number} Index for the item halfway in the list.
 */
const getNextIndex = function (currentIndex, seqLength) {
  let nextIndex = currentIndex + (seqLength / 2);
  if (nextIndex >= seqLength) {
    nextIndex -= seqLength;
  }
  return nextIndex;
};

/**
 * Converts input string into an array of numbers and returns said array.
 * If any of the characters in the string is not a number, `null` will be
 * returned instead.
 * @param {string} input
 * @return Array of numeric values or `null` if input is not valid.
 */
const getDigitSequence = function (input) {
  let invalidInput = false;

  const sequence = input.split("").map((digit) => {
    const int = parseInt(digit);
    if (isNaN(int)) {
      invalidInput = true;
    }
    return int;
  });

  return !invalidInput ? sequence : null;
};

module.exports = solveCaptcha;
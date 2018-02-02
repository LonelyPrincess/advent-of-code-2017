/**
 * --- Day 1: Inverse Captcha - Part I ---
 *
 * This module contains a method that review a sequence of digits and find
 * the sum of all digits that match the next digit in the list. The list is
 * circular, so the digit after the last is the first digit in the list.
 *
 * @module solveCaptcha
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

  let result = 0;
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] === (sequence[i + 1] || sequence[0])) {
      result += sequence[i];
    }
  }

  return result;
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
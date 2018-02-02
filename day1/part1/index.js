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
const solveCaptcha = function (input) {
    let res = 0,
        seq = input.toString().split("").map((digit) => parseInt(digit));

    for (let i = 0; i < seq.length; i++) {
        if (seq[i] === (seq[i + 1] || seq[0])) {
            res += seq[i];
        }
    }

    return res;
};

// TODO: validate input (it can't contain non-numerical values)

module.exports = solveCaptcha;
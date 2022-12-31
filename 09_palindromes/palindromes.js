const palindromes = function (palindrome) {
    palindrome = palindrome.replace(/[^A-Za-z0-9]/g, '');
    palindrome = palindrome.toLowerCase();
    let splitString = palindrome.split("");
    let reverseString = splitString.reverse();
    let joinString = reverseString.join("");
    return joinString === palindrome;
};

// Do not edit below this line
module.exports = palindromes;

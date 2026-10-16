const palindromes = function (string) {
    /*
    Problem = Take a string and check if it is equal after it is reversed

    pseudocode
    
    Take the string passed as argument
    SPLIT it 
    then store it
    REVERSE it 
    then STORE it
    finally COMPARE to the SPLIT of the original passed string
    IF they are equal Yay! it is a palidrome
    ELSE it is not
     */

    const splitString = string.split("");
    const reversedString = splitString.reverse();

    const result = splitString.every((element, index) => {
        return element.localeCompare(reversedString);
    });
};

// Do not edit below this line
module.exports = palindromes;

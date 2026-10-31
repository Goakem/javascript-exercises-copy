const palindromes = function (string) {
    const splitString = [...string];
    const newString = [];
    let result;
    
    for (let i = 0; i < splitString.length; i++) {
        if ((splitString[i] !== " ") && (splitString[i] !== ",") && (splitString[i] !== ".") && (splitString[i] !== "!") ) {
           
            newString.push(splitString[i]);
        }
        
    }
    const reversedString = newString.toReversed();
    console.log("this is the reversed string", reversedString);

    for (let i = 0; i < newString.length; i++) {
        const compare = newString[i].toLowerCase() === reversedString[i].toLowerCase();

        if (compare) {
            result = true;
        } else {
            result = false;
            break;
        }
    }

    return result;
};


//Do not edit below this line
module.exports = palindromes;
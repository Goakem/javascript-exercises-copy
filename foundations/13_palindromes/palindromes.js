const palindromes = function (string) {
    const splitString = [...string];
    const newString = [];
    let result;
    
    for (let i = 0; i < splitString.length; i++) {
        console.log("This is I", i);
        console.log("This is the splitString element currently in action",splitString[i]);
        if ((splitString[i] !== " ") && (splitString[i] !== ",") && (splitString[i] !== ".") && (splitString[i] !== "!") ) {
           
            newString.push(splitString[i]);
        }

        console.log("This is the final new string", newString);
        
    }
    const reversedString = newString.toReversed();
    console.log("this is the reversed string", reversedString);

    for (let i = 0; i < newString.length; i++) {
        const compare = newString[i].toLowerCase() === reversedString[i].toLowerCase();
        console.log("This is the final reault of the conditional",compare);

        if (compare) {
            result = true;
        } else {
            result = false;
            break;
        }
    }

    console.log("This is the final result", result);
    return result;
};


//Do not edit below this line
module.exports = palindromes;
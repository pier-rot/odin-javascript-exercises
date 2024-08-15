const reverseString = function(string) {
    let reversedString = '';
    const stringLength = string.length;

    for (let i = 0; i < stringLength; i++){
        reversedString += string[stringLength - 1 - i];
    }
    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;

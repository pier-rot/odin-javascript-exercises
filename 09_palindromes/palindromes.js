const palindromes = function (str) {
    let filteredString = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/\s{1,}/g,"").toLowerCase();
    let reverseString = "";
    for (let i = 0; i < filteredString.length; i++) {
        reverseString += filteredString[filteredString.length - 1 -i];
    }

    console.log(filteredString);
    console.log(reverseString);
    if (reverseString == filteredString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

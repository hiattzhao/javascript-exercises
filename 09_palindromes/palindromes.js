const palindromes = function (string) {

    // Solution without regex:
    // const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

    // const cleanString = string.toLowerCase()
    //                         .split("")
    //                         .filter(letter => alphanumerical.includes(letter))
    //                         .join("");
    // const reversedString = cleanString.split("").reverse().join("");
    // return cleanString === reversedString;

    // Below code also works:
    let newString = string.toLowerCase().replace(/[^\w\s\']|_/g, "")
         .replace(/\s+/g, "");
    return (newString === newString.split("").reverse().join(""));
};

// Do not edit below this line
module.exports = palindromes;

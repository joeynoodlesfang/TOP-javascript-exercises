const reverseString = function(string) {
    let myArr = string.split("");
    let reversedArr = '';
    for (let i = (myArr.length - 1); i >= 0; i--) {
        
        reversedArr += myArr[i];
    }
    return reversedArr;
};

// Do not edit below this line
module.exports = reverseString;

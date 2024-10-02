const removeFromArray = function(array, ...args) {
    let ret = [];
    for (let i = 0; i < array.length; i++) {
        if (!args.includes(array[i])) {
            ret.push(array[i]);
        }
    }
    return ret;
};

// Do not edit below this line
module.exports = removeFromArray;

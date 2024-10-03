const sumAll = function(begin, end) {
    if (begin < 0 || end < 0) {
        return "ERROR";
    }
    if (!Number.isInteger(begin) || !Number.isInteger(end)) {
        return "ERROR";
    }
    let ret = 0;
    if (begin < end) {
        for (let i = begin; i <= end; i++) {
            ret += i;
        }
    } else {
        for (let i = begin; i >= end; i--) {
            ret += i;
        }
    }
    return ret;
};

// Do not edit below this line
module.exports = sumAll;

const leapYears = function(year) {

    return year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0);

    // Below solution also works
    // if (year % 4 === 0 && !(year % 100 === 0)) {
    //     return true;
    // }

    // if (year % 400 === 0) {
    //     return true;
    // }

    // return false;
};

// Do not edit below this line
module.exports = leapYears;

const findTheOldest = function(peopleArray) {
    // Calculate age
    function calcAge(birth, death) {
        death ??= new Date().getFullYear();
        return death - birth;
    }

    let oldestToYoungestArray =  peopleArray.sort((a, b) => calcAge(b.yearOfBirth, b.yearOfDeath) - calcAge(a.yearOfBirth, a.yearOfDeath))
    return oldestToYoungestArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;

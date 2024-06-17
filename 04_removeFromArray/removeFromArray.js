const removeFromArray = function(array, ...elements) {

    for (let i = 0; i < elements.length; i++) {
        while(array.includes(elements[i])) {
            let index = array.indexOf(elements[i]);
            if (index >= 0) {
                array.splice(index, 1);
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

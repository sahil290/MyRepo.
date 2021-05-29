/* 
remove values in an array
*/

const removeValues = (array) => {
    var index = -1,
        arr_length = array ? array.length : 0,
        resIndex = -1,
        result = [];

    while (++index < arr_length) {
        var value = array[index];

        if (value) {
            result[++resIndex] = value;
        }
    }

    return result;
}
console.log(removeValues([NaN, 0, 15, false, -22,'',undefined, 47, null])); 

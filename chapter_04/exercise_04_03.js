function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; --i) {
        list = prepend(array[i], list);
    }
    return list;
}

function listToArray(list) {
    let array = [];
    for (let element = list; element != null; element = element.rest) {
        array.push(element.value);
    }
    return array;
}

function prepend(value, list) {
    return {
        value: value,
        rest: list
    }
}

function nth(list, position) {
    for (let element = list, currentPosition = 0; element != null; element = element.rest, ++currentPosition) {
        if (currentPosition === position) {
            return element.value;
        }
    }
    return undefined;
}

console.log(arrayToList([1, 2, 3]));
console.log(listToArray(arrayToList([1, 2, 3])));
console.log(prepend(1, prepend(2, null)));
console.log(nth(arrayToList([1, 2, 3]), 0));

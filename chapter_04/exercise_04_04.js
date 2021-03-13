function deepEqual(value1, value2) {
    if ((value1 != null && typeof value1 === "object") && (value2 != null && typeof value2 === "object")) {
        // In this case value1 and value2 are objects
        const value1Keys = Object.keys(value1);
        const value2Keys = Object.keys(value2);
        const checkedKeys = [];

        // Check if both objects have same number of keys
        if (value1Keys.length !== value2Keys.length) {
            return false;
        }

        for (let key1 of value1Keys) {
            // Check if key of the first object is present in the second object
            // and that they have the same value
            if (!value2Keys.includes(key1) || !deepEqual(value1[key1], value2[key1])) {
                return false;
            }
            checkedKeys.push(key1);
        }

        for (let key2 of value2Keys) {
            // Skip an object key if we already tested it
            if (checkedKeys.includes(key2)) {
                continue;
            }
            // Check if key of the second object is present in the first object
            // and that they have the same value
            if (!value1Keys.includes(key2) || !deepEqual(value1[key2], value2[key2])) {
                return false;
            }
            checkedKeys.push(key2);
        }
        return true;

    }
    return value1 === value2;
}

const obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual({here: 1, object: 2}, obj));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
console.log(deepEqual({here: {is: "an"}, object: 2}, obj));
console.log(deepEqual(obj, {here: {is: "an", another: "object"}, object: 2}))
console.log(deepEqual({here: {is: "an", another: "object"}, object: 2}, obj))

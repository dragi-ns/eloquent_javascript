function countBs(text) {
    return countChar(text, 'B');
}

console.log(countBs('Bees'));
console.log(countBs('Big building with Bees'));

function countChar(text, char) {
    let count = 0;
    for (let i = 0; i < text.length; ++i) {
        if (text[i] === char) {
            ++count;
        }
    }
    return count;
}

console.log(countChar('banana', 'a'));
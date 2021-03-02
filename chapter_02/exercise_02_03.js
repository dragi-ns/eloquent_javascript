const size = 8;
let chessBoard = '';
for (let i = 0; i < size; ++i) {
    let currentChar = i % 2 === 0 ? ' ' : '#';
    chessBoard += currentChar;
    for (let j = 1; j < size; ++j) {
        if (currentChar === ' ') {
            currentChar = '#';
        } else {
            currentChar = ' ';
        }
        chessBoard += currentChar;
    }
    chessBoard += '\n';
}
console.log(chessBoard);
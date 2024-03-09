// Forming Magic Square
// https://dev.to/xdmarttt/forming-a-magic-square-day-2-of-365-43a
// https://www.hackerrank.com/challenges/magic-square-forming/problem
function formingMagicSquare(s) {
    // will convert this one programatically
    const magicSquares = [
        [8, 1, 6, 3, 5, 7, 4, 9, 2],
        [4, 3, 8, 9, 5, 1, 2, 7, 6],
        [2, 9, 4, 7, 5, 3, 6, 1, 8],
        [6, 7, 2, 1, 5, 9, 8, 3, 4],
        [6, 1, 8, 7, 5, 3, 2, 9, 4],
        [8, 3, 4, 1, 5, 9, 6, 7, 2],
        [4, 9, 2, 3, 5, 7, 8, 1, 6],
        [2, 7, 6, 9, 5, 1, 4, 3, 8]
    ];

    const allInOne = [...s[0], ...s[1], ...s[2]]
    let lesserCost = Number.MAX_SAFE_INTEGER;
    magicSquares.forEach(x => {
        let totalCost = x.reduce((acc, magicValue, index) => {
            return acc + Math.abs(magicValue - allInOne[index]);
        }, 0);
        lesserCost = Math.min(totalCost, lesserCost);
    })    

    return lesserCost;
}
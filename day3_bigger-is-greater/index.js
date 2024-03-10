// Unfinished solution
// https://www.hackerrank.com/challenges/bigger-is-greater/problem
function biggerIsGreater(w) {
    let origChar = w;
    let lessChar = 'z'.repeat(100);
    
    for(let i = w.length - 1; i >= 0; i--) {
        for (let j = w.length -1; j>= 0; j--) {
            const swapedChar = swapCharacters(lessChar === 'z'.repeat(100) ? w : lessChar, i, j);
            if (swapedChar > origChar && swapedChar < lessChar) {
                lessChar = swapedChar;
            }
        }
    }
    
    return lessChar === 'z'.repeat(100) ? 'no answer' : lessChar;
}
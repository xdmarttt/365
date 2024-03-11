// Unfinished solution
// https://www.hackerrank.com/challenges/bigger-is-greater/problem
function biggerIsGreater(w) {
    let firstStop = -1;
    let nextHighestStrInd = -1;
    const wordArr = w.split("");
    
    for (let i = 0; i < w.length; i++) {
        if (wordArr[i] < wordArr[i+1]) {
            firstStop = i; 
        }
    }
    
    if (firstStop === -1) {
        return 'no answer';
    }
    
    for (let i = firstStop+1; i < w.length; i++) {
        if (wordArr[firstStop] < wordArr[i]) {
            nextHighestStrInd = i; 
        }
    }
    
    let tmp = wordArr[firstStop];
    wordArr[firstStop] = wordArr[nextHighestStrInd];
    wordArr[nextHighestStrInd] = tmp;
    
    let leftPart = wordArr.slice(0, firstStop + 1);
    let rightPart = wordArr.slice(firstStop + 1).sort();

    return [...leftPart, ...rightPart].join('');
}
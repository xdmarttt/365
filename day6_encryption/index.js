// Encryption Problem
// https://www.hackerrank.com/challenges/encryption/problem
function encryption(s) {
    let rows;
    let cols;
    const sqrt = Math.sqrt(s.length)
    if (!Number.isInteger(sqrt)) {
        rows = Math.floor(sqrt);
        cols = Math.ceil(sqrt);
        
        if (rows*cols < s.length) {
            rows +=1;
        }
    } else {
        rows = sqrt;
        cols = sqrt;
    }
    
    const splittedText = splitTextEvery(s, cols)
    const f = splittedText.splice(0, rows)
    const strGroup = [];
    
    f.forEach(x => {
        for(let i = 0; i < x.length; i++) {
            
            if (strGroup[i]) {
                strGroup[i].push(x[i]);
            } else {
                strGroup[i] = [x[i]]
            }
        }
    })
    
    return strGroup.map(x => x.join("")).join(" ")
}


function splitTextEvery(text, num) {
    const result = [];
    let chunk = '';
    let count = 0;
    for (const char of text) {
        chunk += char;
        count++;
        if (count === num) {
            result.push(chunk);
            chunk = '';
            count = 0;
        }
    }
    if (chunk.length > 0) {
        result.push(chunk);
    }
    return result;
}
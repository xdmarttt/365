// https://www.hackerrank.com/challenges/save-the-prisoner/
function saveThePrisoner(n, m, s) {
    let result = 0;
    if (m < n) {
        result = (m + s - 1) % n || n;
    } else {
        m %= n;
        result = (m + s - 1) % n || n;
    }
    return result;
}
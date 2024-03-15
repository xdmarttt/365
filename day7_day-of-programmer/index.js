// Day Of the Programmer
// https://www.hackerrank.com/challenges/day-of-the-programmer/

function dayOfProgrammer(year) {
    if (year < 1918) {
        return year % 4 === 0 ? `12.09.${year}` : `13.09.${year}`;
    }
    if (year === 1918) {
        return `26.09.${year}`; // Account for the 13 days skipped in February 1918
    }

    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    return isLeapYear ? `12.09.${year}` : `13.09.${year}`;
}

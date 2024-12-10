function romanToInteger(s) {
    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let result = 0;
    let len = s.length;
    let i = 0;
    while (i < len) {
        if ( (i < len - 1) && roman[s[i]] < roman[s[i + 1]]) {
            result -= roman[s[i]];
        } else {
            result += roman[s[i]];
        }
        i++;
    }
    return result;

};
let romanNumber = "XII";
console.log(romanToInteger(romanNumber));


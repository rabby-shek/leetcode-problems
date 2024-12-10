# Roman to Integer Conversion

## Problem Description
The task is to convert a Roman numeral string into its corresponding integer value. Roman numerals are represented by the following symbols:

| Symbol | Value |
|--------|-------|
| I      | 1     |
| V      | 5     |
| X      | 10    |
| L      | 50    |
| C      | 100   |
| D      | 500   |
| M      | 1000  |

In Roman numerals:
1. A smaller numeral before a larger numeral indicates subtraction (e.g., `IV` = 4).
2. Otherwise, numerals are added together (e.g., `VI` = 6).

---

## Approach Used
### Greedy Algorithm
This solution uses the **Greedy Algorithm** to process the Roman numeral string. The algorithm makes decisions based on the current numeral and its next numeral:
- If the current numeral is smaller than the next numeral, **subtract** its value.
- Otherwise, **add** its value.

This approach works because Roman numerals follow strict rules for subtraction and addition, making the greedy method optimal for this problem.

---

## Solution
Here is the implementation in JavaScript:

```javascript
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
    let i = 0;
    while (i < s.length) {
        if (i < s.length - 1 && roman[s[i]] < roman[s[i + 1]]) {
            result -= roman[s[i]];
        } else {
            result += roman[s[i]];
        }
        i++;
    }
    return result;
}

// Example Usage
let romanNumber = "XII";
console.log(romanToInteger(romanNumber)); // Output: 12

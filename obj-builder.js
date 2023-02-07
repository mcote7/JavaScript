
const reversed = (str) => {
    let obj = {};
    for(let char of str) {
        (!obj[char]) ? obj[char] = 1 : obj[char]++;
    }
    console.log("obj? ",obj)
    let maxNum = 0;
    let maxChar = '';
    for(let char in obj) {
        console.log("char? ", char, obj[char])
        if(obj[char] > maxNum) {
            maxNum = obj[char];
            maxChar = char;
        }
    }
    return maxChar;
};

console.log(reversed('apzpleppxz'));


// console.log("", );

const func = (n, str) => {
    let result = "";
    let tempArr = str.split(" ");
    let currLineLen = 0;
    for(let i = 0; i < tempArr.length; i++) {
        // console.log("current")
        let j = i + 1;
        if(currLineLen > 0 && currLineLen < n && currLineLen + tempArr[i].length + 1 < n) {
            result -= `\n`;
            result += `${tempArr[i]} \n`;
            currLineLen += tempArr[i].length + 1;
        }
        if(tempArr[j] && tempArr[i].length + tempArr[j].length + 2 < n) {
            currLineLen = tempArr[i].length + tempArr[j].length + 2;
            result += `${tempArr[i]} ${tempArr[j]} \n`;
            i = j;
        } else {
            result += `${tempArr[i]} \n`;
            currLineLen = 0;
        }
    }
    return result;
};

// 

console.log("", func(13, "Four score and seven years ago our fathers brought forth upon this continent a new nation, conceived in liberty and dedicated to the proposition that all men are created equal"));


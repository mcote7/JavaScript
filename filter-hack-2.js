// console.log("", );

const func = (inputData) => {
    // 
    // console.log("", );
    let arr = [...inputData.replaceAll(" ", "").split("\n")];
    let len = arr.length;
    let temp = "";
    console.log(arr)
    for(let i = 0; i < len; i++) {
        if(arr[i] === 'XXX') {
            inputData = "X";
            return inputData;
        } else if (arr[i] === 'OOO') {
            inputData = "O";
            return inputData;
        } else {
            for(let char of arr[i]) {
                // console.log(char)
            }
        }
    }
    inputData = "draw";
    return inputData;
};

console.log("result", func(`X O O
X X -
O O X`));

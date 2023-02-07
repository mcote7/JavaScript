
// const number = 212121;
// const removeDigit = (num, remove) => {
//     const arr = +Array
//         .from(String(num), Number)
//         .filter((n) => n !== remove)
//         .toString()
//         .split(',')
//         .join('');
//     console.log(arr)
// };
// removeDigit(number, 2);


function singleNumber(nums) {
    if(nums.length === 1) return nums[0];
    const duplicateValues = nums.filter((item, indx, s) => s.indexOf(item) !== indx);
    console.log("dups", duplicateValues)
    let result;
    nums.map((num) => {
        if(duplicateValues.indexOf(num) < 0) result = num;
    });
    return result;
};

singleNumber([4,1,2,1,2])
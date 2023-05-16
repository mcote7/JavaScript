// outco ...

// 'use strict'

// console.log("",)

// leet code mock interview 

// 

// const rotateString = (s, goal) => {
//     console.log([...s, ...s].join(""))
    // if(s.length !== goal.length) return false;
    // if(s === goal) return true;
//     let sArr = [...s];
//     for(let i = 0; i < sArr.length; i++) {
//         sArr.push(sArr.shift());
//         if(sArr.join("") === goal) {
//             return true;
//         } else {
//             continue;
//         }
//     }
//     return false;
// };

// const rotateString = (s, goal) => {
//     if(s.length !== goal.length) return false;
//     if(s === goal) return true;
//     return (s + s).includes(goal);
// };

// console.log("result?", rotateString("abcde", "cdeab"))



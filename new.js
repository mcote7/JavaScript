// function plusOne(digits) {
//     const int = BigInt(digits.join('')) + 1n;
//     console.log(digits, int)
//     const arr2 = Array.from(String(int), Number);
//     console.log(arr2)
//     return arr2;
// };

// plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])

// function containsDuplicate(nums) {
//     const dict = new Map();

//     for (let i = 0; i < nums.length; i++) {
//         dict.set(nums[i], 'any')
//         console.log(nums[i])
//     }
//     console.log(dict)
// };

// containsDuplicate([8,9,3,4,5,6])

// const numbers = [1,2,3,1,3,4,5];

// const set = new Set(numbers);

// const result = [...new Set(numbers)];

// console.log("result:", result)


// const track = {
//     id: 1,
//     name: 'any',
//     fav: true
// };

// const trackX = {
//     ...track,
//     ['fav']: !track['fav']
// };


// const numbers = [1, 2, 3, 2, 2, 3];

// const result = {
//         "id": 1,
//         "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//         "price": 109.95,
//         "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//         "category": "men's clothing",
//         "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//         "rating": {
//           "rate": 3.9,
//           "count": 120
//         }
// };

// for (const [key, val] of Object.entries(result)) {
//     if(key === 'rating') {
//         const rating = val;
//         console.log(`rating: { rate: ${rating.rate}, count: ${rating.count}}`)
//         // for (const [key, val] of Object.entries(rating)) {
//         //     console.log(`rating: {${key}:${val}}`)
//         // }
//     } else {
//         console.log(`${key}:${val}`)
//     }
// }


// console.log("result", result)

// console.log(002, 0045)

// const displayAmount = ((amount) => {
//     console.log("hey iife")
//     return amount ?? 0;
// })(); // self invoking function

// console.log(displayAmount)


// const arr = [1,2,3];
// arr[5] = 6;

// console.log("arr?",arr)

// const arr = ['a','b','c','d','e'];

// for(let char of arr) {
//     console.log(char)
// }
// for(let idx in arr) {
//     console.log(idx)
// }
// arr.forEach((val, idx, array) => {
//     console.log(`val:${val}, idx:${idx}, arr:${array}`)
// })

// const add = 0.1 + 0.2;

// console.log(add.toFixed(4))


// Write a code to find the sum of digits of a number until the sum becomes a single digit. 
// 5431 => 5 + 4 + 3 + 1 => 13 => 1 + 3 => 4 

// const numArr = (number) => [...`${number}`].map(Number);
// const allSum = (numArr) => numArr.reduce((a,b) => a + b);
// const mySolution = (number) => {
//     if(number < 0) number = -(number);
//     const result = allSum(numArr(number));
//     return (result > 9) ? mySolution(result) : result;
// };
// console.log(mySolution(5431)); // => 4 ... 
// console.log(mySolution(-5431)); // => 4 ... 

// const num = 5431;

// function addition(num){
//     return (num === 0) ? 0 : (num % 9 || 9); // schooled ... 
// }
// console.log(addition(num));


// const randObj = {
//     "a": 1,
//     "b": 2,
//     "c": 3
// };

// for(let [k,v] of Object.entries(randObj)) {
//     console.log("keys", k, "values", v)
// }

// 👉 Write a code to find the elements occurring only once in the array Input: [1, 2, 3, 4, 5, 1, 2] => Output: [ 3, 4, 5 ]

// const arr = [1,2,3,4];

// const add = arr.reduce((prev, curr) => prev + curr)

// console.log(add)

// const mySet1 = new Set();

// mySet1.add(1)           // Set(1) { 1 }
// mySet1.add(5)           // Set(2) { 1, 5 }
// mySet1.add(5)           // Set(2) { 1, 5 }
// mySet1.add('some text') // Set(3) { 1, 5, 'some text' }
// const o = { a: 1, b: 2 }
// mySet1.add(o)
// const u = { a: 1, b: 2 }
// mySet1.add(u)   // o is referencing a different object, so this is okay

// mySet1.has(1)              // true
// mySet1.has(3)              // false, since 3 has not been added to the set
// mySet1.has(5)              // true
// mySet1.has(Math.sqrt(25))  // true
// mySet1.has('Some Text'.toLowerCase()) // true
// mySet1.has(o)       // true

// mySet1.size         // 5

// mySet1.delete(5)    // removes 5 from the set
// mySet1.has(5)       // false, 5 has been removed

// mySet1.size         // 4, since we just removed one value

// mySet1.add(5)       // Set(5) { 1, 'some text', {...}, {...}, 5 } - a previously deleted item will be added as a new item, it will not retain its original position before deletion

// console.log(mySet1) // Set(5) { 1, "some text", {…}, {…}, 5 }
// console.log(mySet1.has(o), mySet1.has(u))

// for (const item of mySet1) {
//     console.log(item);
// }
// 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

// for (const item of mySet1.keys()) {
//     console.log(item);
// }
// 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

// for (const item of mySet1.values()) {
//     console.log(item);
// }
// 1, "some text", { "a": 1, "b": 2 }, { "a": 1, "b": 2 }, 5

// key and value are the same here
// for (const [key, value] of mySet1.entries()) {
//     console.log(`key: ${key}, val: ${value}`);
// }


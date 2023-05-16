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

// const reverseNumber = (num) => {
//     return +[...num.toString()].reverse().join('');
// };
// console.log("reversed number", reverseNumber(123456)) // 654321 ... 

// if you don't want to mutate the original 
// const arr1 = [1,2,3];
// const arr2 = [...arr1].reverse();
// console.log(arr1, arr2); // [1,2,3], [3,2,1] ... 



// console.log(null == undefined) // true
// console.log(null === undefined) // false
// console.log(1 == '1') // true
// console.log(1 === '1') // false

// queue

// class Queue {
//     constructor(arr) {
//         this.queue = arr;
//         console.log("new queue init:", this.queue)
//     }

//     logQueue() {
//         console.log("current queue val:" , this.queue)
//         return this.queue;
//     }

//     enqueue(val) {
//         this.queue.push(val);
//     }

//     dequeue() {
//         this.queue.shift();
//     }

//     peekNextItem() {
//         console.log("next item in queue:", this.queue[0])
//         return this.queue[0];
//     }
// };


// const ARRAY = [1,2,3];
// const Q = new Queue(ARRAY);

// Q.enqueue(4);
// Q.dequeue();

// Q.peekNextItem();
// Q.logQueue();


// const arr = [1,2,3,4,5];
// console.log(arr[arr.length - 1])

// const errMess = () => {
//     let error = new Error('No single number found...');
//     console.log(error)
//     return error;
// };
// errMess();

// const obj = {
//     "word": 1,
//     "most": 3,
//     "poet": 6
// };

// console.log(obj["most"])

// const isPalindrome = (x) => {
//     const reversedNum = +[...`${x}`].reverse().join('');
//     // console.log("", reversedNum)
//     return x === reversedNum;
// };

// const isPalindrome = (x) => {
//     let reverse = 0;
//     let copy = x;

//     while (copy > 0) {
//         console.log("copy1",copy)

//         const digit = copy % 10;
//         console.log("digit",digit)

//         reverse = reverse * 10 + digit;
//         console.log("reverse",reverse)

//         copy = ~~(copy / 10); //Math.floor(copy / 10)
//         console.log("copy2",copy)
//     }

//     return reverse == x;
// };

// console.log("is palendrome bool", isPalindrome(1234))

// const longestCommonPrefix = (strs) => {
//     if (!strs.length) return '';
//     for (let i = 0; i <= strs[0].length; i++) {
//         for (let j = 1; j < strs.length; j++) {
//             if (strs[0][i] !== strs[j][i]) {
//                 return strs[0].slice(0, i);
//             }
//         }
//     }
//     return strs[0];
// };
// console.log("result", longestCommonPrefix(["flower","flow","flight"]))

// remove dups in place ... 

// const removeDuplicates = (nums) => {
//     for(let i = 0; i < nums.length;) {
//         if(nums[i] === nums[i + 1]) {
//             nums.splice(i, 1);
//         } else {
//             i++;
//         }
//     }
//     return nums.length;
// };

// function removeDuplicates(nums) {
//     let insertIndex = 1;
//     for(let i = 1; i < nums.length; i++) {
//         // We skip to next index if we see a duplicate element
//         if(nums[i - 1] !== nums[i]) {  
//             /* Storing the unique element at insertIndex index and incrementing
//                the insertIndex by 1 */
//             nums[insertIndex] = nums[i];
//             insertIndex++; 
//         }
//     }
//     console.log(nums)
//     return insertIndex;
// };

// const removeElement = (nums, val) => {
//     for(let i = 0; i < nums.length;) {
//         if(nums[i] === val) {
//             nums.splice(i,1);
//             // nums.push("-");
//         } else {
//             i++;
//         }
//     }
//     console.log(nums)
//     return nums.length;
// };

// console.log("result", removeElement([0,1,2,2,3,0,4,2], 2)) // .len = 10
// console.log("result", removeDuplicates([1,1,2])) // .len = 3

// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_] .len = 10

// const lengthOfLastWord = (s) => {
//     // console.log()
//     return s.split(" ").filter((x) => x !== '').slice(-1)[0].length;
// };

// var lengthOfLastWord = function(s) {
//     let trimmedString = s.trim();
//     console.log(trimmedString.lastIndexOf(' ') - 1)
//     return trimmedString.length - trimmedString.lastIndexOf(' ') - 1;
// };

// console.log("result", lengthOfLastWord("   fly me   to   the moon  "))

// const merge = (nums1, m, nums2, n) => {
//     let arr2Idx = 0;
//     for(let i = m; i < nums1.length + n; i++) {
//         if(nums1[i] === 0) {
//             nums1[i] = nums2[arr2Idx];
//             console.log(nums1)
//             arr2Idx++;
//         }
//     }
//     nums1.sort((a,b) => a - b);
//     console.log(nums1)
// };

// console.log("result", merge([1,2,3,0,0,0], 3, [2,5,6], 3))
// console.log("result", merge([0], 0, [1], 1))
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

// const nums = [1, 0, -1, -10, -3, 7, -4, 10];

// console.log([...nums.sort()], [...nums.sort((a,b) => a - b)])

/**
 * @param {number} n
 * @return {string[]}
 */
// const fizzBuzz = (n) => {
//     const result = new Array(n);
//     // console.log(result)
//     for(let i = 0; i < result.length; i++) {
//         let x = i + 1;
//         // if(x % 3 === 0 && x % 5 === 0) {
//         //     result[i] = "FizzBuzz";
//         // } else if(x % 3 === 0) {
//         //     result[i] = "Fizz";
//         // } else if(x % 5 === 0) {
//         //     result[i] = "Buzz";
//         // } else {
//         //     result[i] = `${x}`;
//         // }
//         switch (!!x) {
//             case x % 3 === 0 && x % 5 === 0: {
//                 result[i] = "FizzBuzz";
//                 break;
//             }
//             case x % 3 === 0: {
//                 result[i] = "Fizz";
//                 break;
//             }
//             case x % 5 === 0: {
//                 result[i] = "Buzz";
//                 break;
//             }
//             default: {
//                 result[i] = `${x}`;
//                 break;
//             }
//         }
//     }
//     return result;
// };

// console.log("result:", fizzBuzz(5))

// Input: n = 3
// Output: ["1","2","Fizz"]

/**
 * @param {string} s
 * @return {number}
 */
// const firstUniqChar = (s) => {
//     const arr = s.split("");
//     const map = new Map();
//     console.log(arr)
//     arr.forEach((char) => {
//         if(!map.has(char)) {
//             map.set(char, 1);
//         } else {
//             map.set(char, map.get(char) + 1);
//         }
//     });
//     console.log(map);
//     if(![...map.values()].includes(1)) return -1;
//     for(let [k, v] of map.entries()) {
//         if(v === 1) return arr.indexOf(k);
//     }
// };
// console.log("result:", firstUniqChar("aabb")) // 2 ... idx

// const stringMatching = (words) => {
//     const result = [];
//     for(let i = 0; i < words.length; i++) {
//         for(let j = 0; j < words.length; j++) {
//             if(i === j) continue;
//             // console.log(`match: ${words[i]} to ${words[j]}`)
//             if(words[i].includes(words[j]) && !result.includes(words[j])) {
//                 result.push(words[j])
//             }
//         }
//     }
//     return result;
// };

// console.log("result:", stringMatching(["leetcoder","leetcode","od","hamlet","am"]))



// class Car {
//     color = 'blue';
//     age = 2;
// };

// const car = new Car();
// console.log(car.color); // blue
// console.log(car.age); // 2

// class Person {
//     #firstName = 'Joseph';
//     #lastName = 'Stevens';

//     get name() {
//       return `${this.#firstName} ${this.#lastName}`;
//     }
//   }

//   const person = new Person();
//   console.log(person.name);

//   // SyntaxError: Private field '#firstName' must be
//   // declared in an enclosing class
//   console.log(person.#firstName);
//   console.log(person.#lastName);

// class Vehicle {
//     static defaultColor = 'blue';
// };

// class Car extends Vehicle {
//     static colors = [];

//     static {
//         this.colors.push(super.defaultColor, 'red', 'green');
//     }

//     static {
//         console.log('static methods will run on init')
//     }
// };

// console.log(Car.colors); // [ 'blue', 'red', 'green' ]

// class Car {
//     #color;

//     hasColor() {
//         return #color in this;
//     }
// }

// const car = new Car();
// console.log(car.hasColor()); // true;


// const arr = ['a', 'b', 'c', 'd'];

// // 1st element from the end
// console.log(arr.at(-1)); // d

// // 2nd element from the end
// console.log(arr.at(-2)); // c

// console.log(arr.at(1)); // b

// console.log(arr[-2]); // undefined ... 

// const arr = [1,2,3,4];

// let i = 0;
// let j = arr.length - 1;

// while (i < j) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//     i++;
//     j--;
// }

// console.log(arr)

// let x = 5;
// console.log(x++);

// function fibonacci(n, memo = {}) {
//     console.log("memo val", memo)
//     if (n in memo) return memo[n];
//     if (n <= 1) return n;
//     memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
//     console.log("full func ran")
//     return memo[n];
// };

// console.log(fibonacci(10)); // Output: 55
// console.log(fibonacci(9)); // Output: 6765
// // console.log(fibonacci(30)); // Output: 832040

// function fibonacci(n, memo = {}) {
//     console.log("init memo", n)
//     if (n in memo) {
//         // console.log("💚 n IN memo", memo)
//         return memo[n];
//     } 
//     if (n <= 1) return n;
//     // console.log('memo set', memo)
//     memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
//     return memo[n];
//   }

//   console.log(fibonacci(10)); // Output: 55
//   console.log(fibonacci(20)); // Output: 6765
//   console.log(fibonacci(30)); // Output: 832040
//   console.log(fibonacci(10)); // Output: 55

// console.log(2 ** 5)

// console.log("string".at(-1))


// let obj = {
//     name: 'mike'
// };
// Object.freeze(obj)

// obj.name = 'cote';
// obj.last = 'cote';


// console.log(obj)


// function solution(A) {
//     // Implement your solution here
//     let arr = A.sort((a,b) => a - b);
//     return A.at(-1)
// }

// console.log("res:", solution([1, 3, 6, 4, 1, 2]))

// console.log(true + true + true * 3)

// const task = (i) => {
//     setTimeout(() => { 
//         console.log(i); 
//     }, i * 1000); 
// }

// for (var i = 0; i < 5; i++) { 
//     task(i);
// }


// let i = 0;
// const myLoop = () => {
//     i++;
//     if (i < 5) {
//         myLoop();
//     }
// };
// myLoop();


// var i = 0;                  //  set your counter to 1

// function myLoop() {         //  create a loop function
//   setTimeout(function() {   //  call a 3s setTimeout when the loop is called
//     console.log(i);         //  your code here
//     i++;                    //  increment the counter
//     if (i < 5) {            //  if the counter < 10, call the loop function
//       myLoop();             //  ..  again which will trigger another
//     }                       //  ..  setTimeout()
//   }, i * 1000)
// }

// myLoop();                   //  start the loop

// for (let i = 0; i < 5; i++) { setTimeout(function() { console.log(i); }, i * 1000 ); }

// const findMin = (arr) => {
//     return arr.sort((a,b) => a - b)[0];
// };

// console.log(findMin([2,5,7,1,0,-2]));

// let arr = [[1,2], [3,4,[3,6,[6,7]]]];
// let res = arr.flat(Infinity);
// console.log(res)

// console.log(...[2, 3, 4, 5])
// console.log(Math.min(...[2,5,7,1,0,-2]))
// console.log(Math.max(...[2, 3, 4, 5]))

// console.log(parseInt("123koko"))

// console.log(Number.parseInt("5abc123abc", 10))


// const func = (() => {
//     console.log("self invoked arrow func")
//     return 1;
// })();
// 'use strict'
// let c = { greeting: 'Hey!' };
// // Object.freeze(c);
// let d;

// d = c;
// c.greeting = 'Hello';
// console.log(d.greeting);

// let data = [..."javascript"];
// data[0] = 'n';
// console.log( data.join("") );

// let x = 10;
// console.log(++x);

// let favoriteColor;
// console.log(typeof favoriteColor)

// let n = 5 + 2 + "3";
// console.log(typeof n); // string

// console.log(10 == "10");

// const findMin = (arr) => {
//     let min = 0;
//     for(let i = 0; i < arr.length; i++) {
//         console.log(arr[i + 1])
//         if(arr[i] > arr[i + 1]) {
//             min = arr[i + 1];
//         }
//     }
//     return min;
// }
// console.log(findMin([5,7,3,9,1,4,-1]));



// let x = 10;
// let y = (x++, x);
// console.log(y)


// const result = [1,2,3].reduce((prev, current) => total + num, 4);
// console.log(result);

// let obj = {
//     length: 10,
//     width: 20
// }

// const x = [1, 2, 3];
// const z = x;
// console.log(x === z);

// const obj = {
//     name: 'mike',
//     occ: 'dev',
//     other: 99
// };

// const { name, occ } = obj;

// console.log(occ)

// const ages = [26,27,26,26,28,28,29,30,30];

// const dedupAges = Array.from(new Set(ages));

// console.log(dedupAges)

// (function() {
//     var a = b = 5;
//     a = b;
// })();


// console.log(b, a)

// const reverse = a => a.map((x,y) => a[a.length-1-y])

// console.log(reverse(["a", "b", "c", "d"]))



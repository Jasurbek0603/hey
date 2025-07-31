// // 1-masala
// function countdown(n) {
//   while (n >= 0) {
//     console.log(n);
//     n = n - 1;
//   }
// }
// countdown(5);

// // 2-masala
// function printEven(arr) {
//   let i = 0;
//   while (i < arr.length) {
//     if (arr[i] % 2 == 0) {
//       console.log(arr[i]);
//     }
//     i++;
//   }
// }
// printEven([1, 2, 3, 4]);

// // 3-masala
// function countA(str) {
//   let i = 0;
//   let sanoq = 0;
//   while (i < str.length) {
//     if (str[i] === "a") {
//       sanoq++;
//     }
//     i++;
//   }
//   console.log(sanoq);
// }
// countA("salom");

// // 4-masala
// function sumArray(arr) {
//   let i = 0;
//   let sum = 0;
//   while (i < arr.length) {
//     sum = sum + arr[i];
//     i++;
//   }
//   console.log(sum);
// }
// sumArray([3, 2, 1]);

// // 5-masala
// function reverseText(str) {
//   let i = str.length - 1;
//   let teskari = "";
//   while (i >= 0) {
//     teskari = teskari + str[i];
//     i--;
//   }
//   console.log(teskari);
// }
// reverseText("hi");

// // 6-masala
// function printNegative(arr) {
//   let i = 0;
//   while (i < arr.length) {
//     if (arr[i] < 0) {
//       console.log(arr[i]);
//     }
//     i++;
//   }
// }
// printNegative([-1, 2, -3]);

// // 7-masala
// function countChars(str) {
//   let i = 0;
//   let c = 0;
//   while (i < str.length) {
//     c++;
//     i++;
//   }
//   console.log(c);
// }
// countChars("hello");

// // 8-masala
// function printOdds(n) {
//   let i = 0;
//   while (i <= n) {
//     if (i % 2 == 1) {
//       console.log(i);
//     }
//     i++;
//   }
// }
// printOdds(5);

// // 9-masala
// function findMax(arr) {
//   let i = 1;
//   let max = arr[0];
//   while (i < arr.length) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//     i++;
//   }
//   console.log(max);
// }
// findMax([1, 9, 3]);

// // 10-masala
// function countO(str) {
//   let i = 0;
//   let sanoq = 0;
//   while (i < str.length) {
//     if (str[i] === "o") {
//       sanoq++;
//     }
//     i++;
//   }
//   console.log(sanoq);
// }
// countO("hello world");

// // 11-masala
// function countZeros(arr) {
//   let i = 0;
//   let count = 0;
//   while (i < arr.length) {
//     if (arr[i] === 0) {
//       count++;
//     }
//     i++;
//   }
//   console.log(count);
// }
// countZeros([0, 1, 0]);

// // 12-masala
// function sumPositive(arr) {
//   let i = 0;
//   let hold = 0;
//   while (i < arr.length) {
//     if (arr[i] > 0) {
//       hold = hold + arr[i];
//     }
//     i++;
//   }
//   console.log(hold);
// }
// sumPositive([-1, 2, 3]);

// // 13-masala
// function printLowercase(str) {
//   let i = 0;
//   while (i < str.length) {
//     let kod = str.charCodeAt(i);
//     if (kod >= 97 && kod <= 122) {
//       console.log(str[i]);
//     }
//     i++;
//   }
// }
// printLowercase("Salom");

// // 14-masala
// function printOddIndexes(arr) {
//   let i = 0;
//   while (i < arr.length) {
//     if (i % 2 == 1) {
//       console.log(arr[i]);
//     }
//     i++;
//   }
// }
// printOddIndexes(["a", "b", "c", "d"]);

// // 15-masala
// function replaceE(str) {
//   let i = 0;
//   let natija = "";
//   while (i < str.length) {
//     if (str[i] === "e") {
//       natija += "3";
//     } else {
//       natija += str[i];
//     }
//     i++;
//   }
//   console.log(natija);
// }
// replaceE("hello");



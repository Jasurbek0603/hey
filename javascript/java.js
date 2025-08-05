// 1- solution
// function capitalizeWords(str) {
//   return str
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//     .join(" ");
// }
// console.log(capitalizeWords("salom dunyo"));

// 2-solution
// function toUpperNames(names) {
//   return names.map(name => name.toUpperCase());
// }
// console.log(toUpperNames(["ali", "vali", "hasan"]));

// 3-solution
// function countPositive(numbers) {
//   return numbers.filter(num => num > 0).length;
// }
// console.log(countPositive([1, -3, 4, 0, 6]));

// 4-solution
// function removeSpaces(str) {
//   return str.trim().replaceAll(" ", "");
// }
// console.log(removeSpaces(" salom  dunyo "));
// 5-solution
// function hasEvenNumber(arr) {
//   return arr.some(num => num % 2 === 0);
// }
// console.log(hasEvenNumber([1, 3, 5, 8]))

// 6-solution
// function removeZeros(arr) {
//   return arr.filter(num => num !== 0);
// }
// console.log(removeZeros([0, 1, 2, 0, 3]));

// 7-solution
// function reverseWords(str) {
//   return str
//     .split(" ")
//     .map(word => word.split("").reverse().join(""))
//     .join(" ");
// }
// console.log(reverseWords("salom dunyo"));

// 8.-solution
// function threeLetterWords(words) {
//   return words.filter((word) => word.length === 3);
// }
// console.log(threeLetterWords(["sal", "olma", "bor"]));

// 9-solution
// function doubleNumbers(numbers) {
//   return numbers.map(num => num * 2);
// }
// console.log(doubleNumbers([1, 2, 3]));

// 10-solution
// function splitChars(str) {
//   return str.split("");
// }
// console.log(splitChars("hello"));

// 11-solution
// function onlyIntegers(arr) {
//   return arr.filter(Number.isInteger);
// }
// console.log(onlyIntegers([1.5, 2, 3.1, 4]));

// 12-solution
// function addIndex(arr) {
//   return arr.map((value, index) => value + index);
// }
// console.log(addIndex([10, 20, 30]));

// 13-solution
// function countA(str) {
//   return str
//     .toLowerCase()
//     .split("")
//     .filter(char => char === 'a').length;
// }
// console.log(countA("Ananas"));

// 14-solution
// function getInitials(str) {
//   return str
//     .split(" ")
//     .map(word => word.charAt(0))
//     .join("");
// }
// console.log(getInitials("Hello World From JS"));

// 15-solution
// function flattenArray(arr) {
//   return arr.flat();
// }
// console.log(flattenArray([1, [2, 3], [4, 5]]));

// 16-solution
// function onlyWords(arr) {
//   return arr.filter(word => /^[a-zA-Z]+$/.test(word));
// }
// console.log(onlyWords(["hello", "123", "world!", "JS"]))

// 17-solution
// function extractNumbers(str) {
//   return str
//     .split("")
//     .filter(char => !isNaN(char) && char !== " ")
//     .map(Number);
// }
// console.log(extractNumbers("ab1c3d2"));

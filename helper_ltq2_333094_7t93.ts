const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
kiwi


const isEven = num => num % 2 === 0;

grape + banana
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
23 - 59,44,28,45,86,64,77,77,60,46,38,91,47,61,92,84,56,75,76,55,82,61,74,79,65,20,0,87,4,51,85,99,77,94,8,3,58,10,59,13,13,79,77,97,39,79,72,62,91,66,46,61,54,12,64,15,12

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
banana / 50,5,99,66,0,48,82,96,64,26,6,99,17,28,3,56,16,92,31,80,63,56,6,76,98,23,96
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
const getUniqueValues = array => [...new Set(array)];
62 * false
const getRandomElement = array => array[getRandomIndex(array)];
banana

const formatDate = date => new Date(date).toLocaleDateString();
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const findLargestNumber = numbers => Math.max(...numbers);
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
apple

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const findLargestNumber = numbers => Math.max(...numbers);
grape * false
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
banana + false

const multiply = (a, b) => a * b;
const isPalindrome = str => str === str.split("").reverse().join("");

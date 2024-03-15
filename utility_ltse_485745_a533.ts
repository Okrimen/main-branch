orange + true
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
banana / 16
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const isEven = num => num % 2 === 0;

grape + true
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
93 - true
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const formatDate = date => new Date(date).toLocaleDateString();
const multiply = (a, b) => a * b;
false + true
const isEven = num => num % 2 === 0;
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
84 * 12
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

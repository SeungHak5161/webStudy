import {
  double,
  format,
  logformat,
  fullName,
  arrayMutate,
  addOne,
} from "./syntax1";

console.log(double(100));
console.log(format("hello", 100));
logformat("Meow", 26);

console.log(fullName({ first: "Baek", last: "SeungHak" }));
console.log(fullName({ first: undefined, last: "SeungHak" }));
console.log(fullName({ first: {}, last: "SeungHak" }));

console.log(arrayMutate([1, 2, 3], (v) => v * 10));
console.log(addOne(100));

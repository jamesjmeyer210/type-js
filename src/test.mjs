import { typedef, isType, val } from './t.mjs';

/*
typedef(...) Tests
*/
console.assert(typedef !== undefined);

console.assert(typedef('u8', (x) => {
  return typeof(x) == 'number' && x > -1 && x < 256;
}));

console.assert(!typedef('u8', (x) => {return true}));

console.assert(!typedef('u32', {}));

console.assert(!typedef('number', 1));

console.assert(typedef('i8', (x) => {
  return typeof(x) == 'number' && x > -128 && x < 128;
}));

console.assert(typedef('number', (x) => {
  return typeof(x) == 'number';
}));

console.assert(typedef('Rectangle', (x) => {
  return typeof(x) == 'object' &&
    typeof(x.length) == 'number' &&
    typeof(x.width) == 'number';
}));

/*
isType(...) Tests
*/
console.assert(isType !== undefined);

console.assert(isType('number', 1));

console.assert(isType('u32', 2) === undefined);

console.assert(isType('u8', -1) === false);

console.assert(isType('Rectangle', {length: 1, width: 2}));

/*
val(...) Tests
*/
console.assert(val !== undefined);

console.assert(typedef('Person', (p) => {
  return typeof(p) == 'object' &&
    typeof(p.name) == 'string' &&
    typeof(p.age) == 'number' &&
    typeof(p.address) == 'object';
}));

let alice = {
  name: 'Alice',
  age: 25,
  address: {},
};

console.assert(val('Person', alice) === alice);

console.assert(val('Person', alice) !== undefined);

console.assert(val('Planet', alice) === undefined);

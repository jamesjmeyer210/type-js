import { TypeJs, typedef, typeis, val } from './t.mjs';

/*
* TypeJs module tests
* */
const tjs = TypeJs.from();

console.assert(typeof(tjs) === 'object');

Object.values(tjs).forEach((val) => {
    console.assert(typeof(val) === 'function');
});

console.assert(Object.isFrozen(tjs));

/*
typedef(...) Tests
*/
console.assert(typedef !== undefined);

console.assert(!typedef('u8', (x) => {return true}));

console.assert(!typedef('u32', {}));

console.assert(!typedef('number', 1));

// console.assert(typedef('Rectangle', (x) => {
//   return typeof(x) == 'object' &&
//     typeof(x.length) == 'number' &&
//     typeof(x.width) == 'number';
// }));
console.assert(typedef('Rectangle', (x) => {
  return typeis('object', x) &&
    typeis('number', x.length) &&
    typeis('number', x.width);
}));

/*
isType(...) Tests
*/
console.assert(typeis !== undefined);

console.assert(typeis('number', 1));

console.assert(typeis('u8', -1) === false);

console.assert(typeis('Rectangle', {length: 1, width: 2}));

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
  age: 8,
  address: {},
};

console.assert(val('Person', alice) === alice);

console.assert(val('Person', alice) !== undefined);

console.assert(val('Planet', alice) === undefined);

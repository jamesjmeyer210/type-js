import { typedef, isType } from './t.mjs';

console.assert(typedef !== undefined);

console.assert(typedef("Person", {
  name: '',
  age: 0,
  address: {},
}) !== undefined);

console.assert(typedef("Person", {}) === undefined);

console.assert(typedef("number", 0) === undefined);

console.assert(typedef("string", 'Alice') === undefined);

console.assert(isType('Person', {
  name: 'Alice',
  age: 25,
  address: {},
}));

console.assert(isType('Person', {
  length: 2,
  width: 3,
}) === false);

console.assert(isType('Rectangle', {
  name: 'Alice',
  age: 25,
  address: {},
}) === undefined);

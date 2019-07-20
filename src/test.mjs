import { typedef } from './t.mjs';

console.assert(typedef !== undefined);

console.assert(typedef("Person", {
  name: '',
  age: 0,
  address: {},
}) !== undefined);

console.assert(typedef("Person", {}) === undefined);

console.assert(typedef("number", 0) === undefined);

console.assert(typedef("string", 'Alice') === undefined);

let _types = new Map();

const typedef = (type, def) => {
  if(typeof(type) == 'string' && typeof(def) == 'function' && !_types.has(type)){
    _types.set(type, def);
    return true;
  }
  return false;
};

const typeis = (type, value) => {
  if(typeof(type) == "string" && _types.has(type)){
    const proof = _types.get(type);
    return proof(value);
  }else{
    return undefined;
  }
};

const val = (type, value) => {
  const evaluate = typeis(type, value);
  return evaluate === true ? value : evaluate;
};

// the private typejs module
let __TYPES_JS__ = {
  get: (index) => {
    return typeis('number', s) ? _types.get(index) : undefined
  },
  len: _ => {
    return _types.length
  },
};

// The public typejs module
// Uses the builder pattern to control the number of instances of the type
// map - ie. the singleton pattern
const TypeJs = {
  from: () => {
    if(!Object.isFrozen(__TYPES_JS__)){
      __TYPES_JS__.def = typedef;
      __TYPES_JS__.is = typeis;
      __TYPES_JS__.val = val;
      Object.freeze(__TYPES_JS__);
      return __TYPES_JS__;
    }else{
      return undefined;
    }
  }
};

/* Simple types built into Javascript */
typedef('undefined', (x) => { return typeof(x) == 'undefined'; });

typedef('boolean', (x) => { return typeof(x) == 'boolean'; });

typedef('number', (x) => { return typeof(x) == 'number'; });

typedef('string', (x) => { return typeof(x) == 'string'; });

typedef('object', (x) => { return typeof(x) == 'object'; });

typedef('array', (x) => { return Arrays.isArray(x); });

typedef('function', (x) => { return typeof(x) == 'function'; });

/* Simple types with more complex rules */
typedef('u8', (x) => {
  return Number.isInteger(x) && x > -1 && x < 256;
});

typedef('i8', (x) => {
  return Number.isInteger(x) && x > -128 && x < 128;
});

typedef('u16', (x) => {
  return Number.isInteger(x) && x > -1 && x < 65536;
});

typedef('i16', (x) => {
  return Number.isInteger(x) && x > -32768 && x < 32768;
});

typedef('u32', (x) => {
  return Number.isInteger(x) && x > -1 && x < 4294967296;
});

typedef('i32', (x) => {
  return Number.isInteger(x) && x > -2147483648 && x < 2147483648;
});

export {TypeJs, typedef, typeis, val};

let _types = new Map();

const __TYPES__ = {
  get: (index) => { return typeis('number', s) ? _types.get(index) : undefined },
  len: _ => {return _types.length },
};

const typedef = (type, def) => {
  if(typeof(type) == 'string' && typeof(def) == 'function' && !_types.has(type)){
    _types.set(type, def);
    return true;
  }
  return false;
};

/* Simple types built into Javascript */
typedef('undefined', (x) => { return typeof(x) == 'undefined'; });

typedef('boolean', (x) => { return typeof(x) == 'boolean'; });

typedef('number', (x) => { return typeof(x) == 'number'; });

typedef('string', (x) => { return typeof(x) == 'string'; });

typedef('object', (x) => { return typeof(x) == 'object'; });

typedef('array', (x) => { return Arrays.isArray(x); });

typedef('function', (x) => { return typeof(x) == 'function'; });

const typeis = (type, value) => {
  if(typeof(type) == "string" && _types.has(type)){
    const proof = _types.get(type);
    return proof(value);
  }else{
    return undefined;
  }
};

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

const val = (type, value) => {
  const evaluate = typeis(type, value);
  return evaluate === true ? value : evaluate;
};

const def = (type) => {
  return _types.get(type);
};

export {typedef, typeis, val};

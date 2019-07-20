let _types = new Map();

const typedef = (type, def) => {
  if(typeof(type) == 'string' && typeof(def) == 'function' && !_types.has(type)){
    _types.set(type, def);
    return true;
  }
  return false;
}

const typeis = (type, value) => {
  if(typeof(type) == "string" && _types.has(type)){
    const proof = _types.get(type);
    return proof(value);
  }else{
    return undefined;
  }
}

const val = (type, value) => {
  const evaluate = typeis(type, value);
  return evaluate === true ? value : evaluate;
}

export {typedef, typeis, val};

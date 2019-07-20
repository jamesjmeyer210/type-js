let _types = new Map();

const typedef = (type, def) => {
  if(typeof(type) == "string" && typeof(def) == "object"){
    if(_types.has(type)){
      return undefined;
    }else{
      const r = {type: type, def: Object.keys(def).toString()};
      _types.set(r.type, r.def);
      return r;
    }
  }else{
    return undefined;
  }
}

const isType = (type, value) => {
  if(typeof(type) == "string" && typeof(value) == "object"){
    if(_types.has(type)){
      return _types.get(type) == Object.keys(value).toString();
    }else{
      return undefined;
    }
  }else{
    return undefined;
  }
}

const val = (type, value) => {
  const evaluate = isType(type, value);
  return evaluate === true ? value : evaluate;
}
// const T = (obj) => { return Object.keys(obj).toString(); }
//
// const typesEq = (a , b) => { return T(a) == T(b); }
//
// const isString = (a) => { return typeof(a) === "string"; }
//
// const isNum = (a) => { return typeof(a) === "number"; }
//
// const isObj = (a) => { return typeof(a) === "obj"; }
//
// const ref = (t, v) => {
//   return typeof(t) === "string" && typeof(v) === "object" ? {t: t,val: v} : undefined;
// }

export {typedef, isType, val};

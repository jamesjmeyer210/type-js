function Heap(types) {
    // heap constructor
    //  Takes all the types and maps them to arrays
    this.types = new Map();
    for(let i = 0; i < types.len; i++){
        types.add(types.get(i), []);
    }

    this.def = (type, variable) => {

    };

    this.undef = (variable) => {

    };
}
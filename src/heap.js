// The single heap instance
let _heap = undefined;

// The private heap module
const __HEAP__ = {
    def: (type, variable) => {

    },
    undef: (variable) => {

    },
};

// The public heap module that will we exported
const Heap = {
    // Constructor that returns the private heap
    //  This is an implementation of the builder pattern that treats
    //  _heap as a singleton
    from_types: (types) => {
        if(_heap === undefined){
            _heap = new Map();
            for(let i = 0; i < types.len(); i++){
                _heap.set(types.get(i), []);
            }
            return __HEAP__;
        }else{
            return undefined;
        }
    }
};
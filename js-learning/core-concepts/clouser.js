function outer () {
    let count = 0;

    function getCount() {
        return count;
    }

    function increment() {
        count++;
        return getCount();
    }

    return {
        getCount,
        increment,
    }
}

var obj = outer();

// console.log('DEBUG:: count->', obj.getCount())
// console.log('DEBUG:: count->', obj.increment())


function multiplier(factor) {
    return function(n) {
        return factor * n;
    }

}


/**
 * Implement a once utility so a function runs at most one time and returns the same result on later
    calls.
 */

var obj = {
    name: 'obj',
    test: function () {
        console.log('DEBUG:: test called', this);
        return { ready: true }
    }
}

function once(fn) {
    let called = false;
    let result;

    return function(...args) {
        if(!called) {
            console.log('inner this->', this);
            result = fn.apply(this, args);
            called = true;
        }
        return result;
    }
}

// let wrapper = once(obj.test);
// wrapper.call(obj);
// wrapper.call(obj);
// wrapper.call(obj);


/**
 * Write a memoize function that caches results by argument for a pure function.
 */
function getValue(input) {
    console.log('DEBUG:: getValue called with', input)
    if (input === 1) {
        return 'a';
    } else if (input === 2) {
        return 'b';
    } else {
        return 'z'
    }
}

function memoize(fn) {
    let cache = new Map();

    return function(...args) {
        const key = args.length === 1 ? args[0]: JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const value = fn.call(this, args);
        cache.set(key, value);
        return value;
    }
}

const handleGetValue = memoize(getValue);
console.log(handleGetValue(1))
console.log(handleGetValue(2));
console.log(handleGetValue(1));
console.log(handleGetValue(3));







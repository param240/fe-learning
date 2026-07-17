
// var hoisting
function varHoisting() {
    console.log('DEBUG:: a ->', a); // undefined
    var a;
}


// let hoisting
function letHoisting() {
    try {
        console.log('DEBUG:: b ->', b); // ReferenceError: Cannot access 'b' before initialization
        let b;
    } catch (error) {
        console.log('DEBUG:: let hoisting error ->', error);
    }
}


//const hoisting
function constHoisting() {
    try {
        console.log('DEBUG:: c ->', c); // ReferenceError: Cannot access 'c' before initialization
        const c = 1;
    } catch (error) {
        console.log('DEBUG:: const hoisting error ->', error);
    }
}


// const hoisting edge case - missing initializer
/**
 * The reason is the line const c;. A const declaration is required to have an initializer — const c;
 * with no assignment is invalid syntax, not a runtime problem. And that changes everything about when the error happens.
 * SyntaxErrors are thrown at parse time, before any execution begins. 
 */
// try {
//     console.log('DEBUG:: d ->', d); // Throws error SyntaxError: Missing initializer in const declaration
//     const d;
// } catch (error) {
//     console.log('DEBUG:: const hoisting error ->', error);
// }


/**
 * var i is function-scoped, so the entire loop creates exactly one binding for i, living in the function's scope.
 * All three arrow callbacks close over that same single binding — not three copies, the identical variable.
 * This is the closure model from earlier: a closure captures the binding, not a snapshot of its value.
 */
function varIncrementWithTimeout() {
    for (var i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log('DEBUG:: var i->', i)
        }, 0);
    }    
}


/**
 * let i is block-scoped, and the loop does something specific that var does not: per the spec, each iteration gets a fresh binding of i.
 * The engine copies the value forward into the new binding at the start of each iteration, runs the body, then increments.
 * So there isn't one i — there are three distinct i bindings, one per iteration, holding different values.
 */
function letIncrementWithTimeout() {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log('DEBUG:: let i->', i)
        }, 0);
    }
}


/**
 * make var behave like let
 */
function improvedVarIncrementWithTimeout() {
    for (var i = 0; i < 3; i++) {

        function test(k) {
            setTimeout(() => {
                console.log('DEBUG:: var i->', k)
            }, 0);
        }

        test(i)
    }    
}

// const is immutable binding, but mutable object
function constMutation() {
    const user = { name: 'Isha'}
    user.name = 'Ish';
    console.log('DEBUG:: user->', user);

    user = {};                       // TypeError: Assignment to constant variable.
}

constMutation();





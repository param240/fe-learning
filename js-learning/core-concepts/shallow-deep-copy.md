# Shallow copy

A shallow copy duplicates the top level but shares the inner objects.

Shallow copy tools:

1. Spread operator 
2. Object.assign
3. arr.slice
4. Array.from(arr)

# Deep copy

a deep copy recursively duplicates everything, so the two structures share nothing. It only matters for objects and arrays.

Deep copy tools:
1. structuredClone
2. JSON.parse(JSON.stringify(obj))    // Works only for pure primitive/plain-object data, other types gets dropped
3. lodash.deepClone

Note: Primitives (strings, numbers, booleans etc) are always copied by value on assignment, so there's no sharing to worry about.
function shallowCopySpread() {
    const original = {
        name: 'Isha',
        details: {
            age: 3,
        }
    }

    const copy = { ...original };
    console.log('DEBUG:: copy === original->', copy === original);

    copy.name = 'Ish';
    console.log('DEBUG:: original.name->', original.name);

    copy.details.age = 4;
    console.log('DEBUG:: original.skills->', original.details.age);
}


function deepCopyStructuredClone() {
    const original = {
        name: 'Isha',
        details: {
            age: 3,
        }
    }

    const copy = structuredClone(original);
    console.log('DEBUG:: copy === original->', copy === original);

    copy.name = 'Ish';
    console.log('DEBUG:: original.name->', original.name);

    copy.details.age = 4;
    console.log('DEBUG:: original.skills->', original.details.age);


}

function deepClone(value, seen = new WeakMap()) {
    if (value == null || typeof value !== 'object') {
        return value;
    }
    if (seen.has(value)) return seen.get(value);

    let result = Array.isArray(value) ? [] : {};
    seen.set(value, result);

    const objKeyValuePairsArray = Object.entries(value);

    for (keyValuePair of objKeyValuePairsArray) {
        const k = keyValuePair[0];
        let v = keyValuePair[1];

        result[k] = deepClone(v);
    }

    return result;

}

function testDeepClone() {
    console.log('DEBUG:: In testDeepClone')
    const original = {
        name: 'Isha',
        details: {
            age: 3,
        }
    }

    const copy = deepClone(original);
    console.log('DEBUG:: copy->', copy);
    console.log('DEBUG:: copy === original->', copy === original);

    copy.name = 'Ish';
    console.log('DEBUG:: original.name->', original.name);

    copy.details.age = 4;
    console.log('DEBUG:: original.skills->', original.details.age);
}

testDeepClone();
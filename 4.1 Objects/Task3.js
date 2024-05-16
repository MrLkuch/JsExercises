// https://javascript.info/object#sum-object-properties
'use strict';

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function sum(salaries) {
    let result;
    for (key in salaries) {
        result += salaries[key];

    }
    return result;

}

alert(sum(salaries));
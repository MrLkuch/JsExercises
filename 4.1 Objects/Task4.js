// https://javascript.info/object#multiply-numeric-property-values-by-2
'use strict';

function multiplyNumeric(obj) {
    for (key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }

    return;
}

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};
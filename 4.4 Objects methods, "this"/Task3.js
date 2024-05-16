// https://javascript.info/object-methods#chaining
'use strict';

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this
    },
    down() {
        this.step--;
        return this

    },
    showStep: function () { // shows the current step
        alert(this.step);
        return this
    }
};
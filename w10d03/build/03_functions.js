"use strict";
const sayHello = (firstName, age) => {
    return `hello there ${firstName}`;
};
sayHello('Alice');
sayHello('Alice', 42);
const returningPromise = () => {
    return new Promise((resolve) => {
        resolve('hello there');
    });
};
returningPromise().then((str) => { });
const acceptsAnyNumber = (...myStrings) => {
    return 100;
};
acceptsAnyNumber('hello', 'world', 42, 22);
const filter = (arr, cb) => {
    const output = [];
    for (const num of arr) {
        if (cb(num)) {
            output.push(num);
        }
    }
    return output;
};

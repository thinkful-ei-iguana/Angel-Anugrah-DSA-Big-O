/* eslint-disable indent */

//Drill 1
function sheep(num) {
    for (let i=num; i > 0; i--) {
        console.log(`${i}: Another sheep jumps over the fence`);
    }
    console.log('All Sheep jumped over the fence')
}

sheep(3);

//Drill 2
function powerCalculator(base, exp) {
    if (exp < 0) {
        return "exponent should be >= 0"
    }

    return Math.pow(base, exp);
}

//Drill 3
function reverseString(str) {
    let reverse = '';

    for (let i = str.length-1; i >=0; i--) {
        reverse += str[i];
    }

    return reverse;
}

// Local Scope and Global Scope

// Error

// let x = 3; let x = 4;

// Local Scope

function function1(){

let x = 3;
console.log(x);

}

function1();

function function2(){

let x = 7;
console.log(x);

}

function2();
function1();

// Global Scope

let x = 3;

function function3(){

console.log(x);

}

function3();

function function4(){

    let x = 88;
console.log(x);

}

function4();
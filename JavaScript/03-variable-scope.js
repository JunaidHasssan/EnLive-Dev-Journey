// Local Scope and Global Scope

// Error

// let x = 3; let x = 4;

// Local Scope
//Only values inside a block can be accessed

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

// function 1 and 2 both are x variables but both will give different answers but of local scope

// Global Scope
// There is a global value which can be accessed by everyone

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

// Lexical Scope
// Child functions can get values from Paarent Functions

function parent(){
    let Name = "Junaid";

    //console.log(University);
    //outer function can not get values from inner function

    function brother1() {
        let University = "UMT"
        console.log(Name);
        console.log(University);

// inner function can also have its own value
        
    }

    function brother2() {

        console.log(Name);
        //console.log(University);
        //inner functions can not get values from eachother
        
    }

    brother1()
    brother2()
}
parent()

// Any number of inner functions can get values from outer function
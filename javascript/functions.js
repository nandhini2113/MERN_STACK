// console.log(student);

// var student={
//     name:"john",
//     id:101,
//     branch:"cse"
// }

// console.log(student);
// console.log(typeof student);
// console.log(typeof {});
// console.log(typeof []);

// console.log(name)

// let name="apple";
// name="banana";

// const id=101;


//named function
function add(a,b){
    c = a+b;
    return c;
}
console.log(add(5,9));

//Arrow function

const add1=(a,b)=>{
    c= a+b;
    a/b;
    a-b;
    // c = a+b;
    return c;
}    
console.log(add1(3,4));

const arr=[4,6,2,8,1]
let x = arr.sort((a,b)=>b-a);
console.log(x);


//Higher order functions

const array = (arr, func) => { 
    return arr.map(func); 
   };

const doubled = array([1, 2, 3], x => x * 2); 
console.log(doubled);

//callback function
function add(a,b){
    return a+b;
}

function mul(a,b){
    return a*b;
}

function calci(x,y,operation){
    return operation(x,y);
}

console.log(calci(5,3,add));

let add3 = (a,b)=>{
    return a+b;
}

const calculator=(x,y,operation)=>operation(x,y);

console.log(calculator(10,30,add3));


function greet(name){
    console.log(`Hello, ${name}`);
}

function input(callback){
    const name = 'john';
    callback(name);
}

input(greet);

//scoping
var a=10;
var b=20;

function addition(x,y){
    var a=30;
    var res = x+y;
    console.log(a);
    console.log(b);
    console.log(res);
    console.log(a+b);
}

addition(5,9);

//clouser











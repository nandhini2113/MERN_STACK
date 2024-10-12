//spread operator

const arr1 = [1,2,3];
const arr2 =[4,5,6];

const arr = [...arr1,...arr2]
console.log(arr);//[ 1, 2, 3, 4, 5, 6 ]

//rest operator

function array(...numbers){
    return numbers
}
console.log(array(arr1,arr2));


//shallow copy
const s1={
    name:"john",
    place:'nellore'
};

const s2 = s1;
console.log(s1);
console.log(s2);
s2.place='chennai';
console.log(s2);
console.log(s1);

//Deep copy
let s3={
    name:"john",
    place:'nellore'
};

let s4 = s3;
console.log(s4);
console.log(s3);
s4 = JSON.parse(JSON.stringify(s3));
s4.place="bangalore";
console.log(s4);
console.log(s3);





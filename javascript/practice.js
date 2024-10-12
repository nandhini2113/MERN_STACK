//1.
function caluculateArea(radius) {
    return 3.14 * radius ** 2;
}
console.log(caluculateArea(4));


//2.
let double = (x) => {
    return x * 2;
}
console.log(double(3));

//4.
function createMultiplier(n){
    return function multiplier(x){
        return x*n;
    }
}
let a = createMultiplier(2);
console.log(a(9));


//6.
let arr = [1,2,3,4,5];
result = arr.reduce((a,b)=>a*b);
console.log(result);

let r = arr.reduce((a,b)=>{
    console.log(a,b);
    return a*b   
});
console.log(r);



//8.
const person =
{
    name: 'Alice',
    age: 30,
    print: function introduce(city, country) {
        console.log(`I'm ${this.name}, ${this.age} years old, from ${city}, ${country}`);
    }
}
let x = person.print.call(person, 'New York', 'USA');

//9.
let y = person.print.apply(person, ['New York', 'USA']);

//12.
function createCounter(){
    let s = {
        name : ['bob', 'alice','john'],
        age: [20,21,21]};
        return function getCount(){
            let count=0;
            for(let i=0;i<s.name.length;i++)
                count++;  
            return count; 
        }
}
let z=createCounter();
console.log(z());


//1.
function ArrDouble(arr) {
    return arr.map(num => num * 2);
}
let res = ArrDouble([1, 2, 3, 4])
console.log(res);


//6.
let option = 1;
switch (option) {
    case 1:
        console.log("Deposit");
        break;
    case 2:
        console.log("withdraw");
        break;
    default:
        console.log("Invalid");
}

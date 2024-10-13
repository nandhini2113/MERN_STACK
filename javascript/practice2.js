//JSON

//1.  JSON string and access the 'name' property:
const jsonString = `{ "name": "John", "age": 30, "city":"New York" }`;
const jsonString1 = JSON.parse(jsonString);
console.log(jsonString1["name"]);
console.log(jsonString1.name);


//2. Convert the following object to a JSON string:
const person = {
    name: "Alice",
    age: 25,
    hobbies: ["reading", "swimming"]
};
console.log(JSON.stringify(person));

const p = `{
    "name": "Alice",
    "age": 25,
    "hobbies": "reading"
}`;
const p1 = JSON.parse(p);
console.log(p1);



//object methods

//3. Given the following object, 

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};

//a)use Object.keys() to get an array of its keys:
const keys = Object.keys(car)
console.log(keys);

//b) Use Object.values() to get an array of values from the 'car' object above.
const values = Object.values(car)
console.log(values);

//c) Use Object.entries() to get an array of key-value pairs from the 'car' object.
const entries = Object.entries(car)
console.log(entries);

//d) Use Object.fromEntries() to convert the following array of key-value pairs into an object:
const entries1 = [['name', 'Alice'], ['age', 25], ['city', 'London']];
const fe = Object.fromEntries(entries1)
console.log(fe);

//e) Create a new object by merging two objects using the spread operator:
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);


// Map:

const fruits = new Map(
    [["apple", 1],
    ["banana", 2],
    ["orange", 3]]
);
console.log(fruits);

// a) Create a Map and add the following key-value pairs:
// ("apple", 1), ("banana", 2), ("orange", 3)

const fruits1 = new Map();
fruits1.set("apple", 1);
fruits1.set("banana", 2);
fruits1.set("orange", 3);

console.log(fruits1);

// b) Check if the Map contains a key "banana" and retrieve its value.
console.log(fruits1.has("banana"));
console.log(fruits1.get("banana"));

// c) Iterate through the Map and log each key-value pair.
for(let [key,value] of fruits1)
    console.log(key +" " + value);

for(let [i,j] of fruits1)
    console.log(i +" " + j);
        
// d) Create a Map from an array of key-value pairs:
const pairs = new Map([['a', 1], ['b', 2], ['c', 3]]); 
console.log(pairs);
console.log(pairs.keys());
console.log(pairs.values());
console.log(pairs.entries());


// e) Convert a Map to an object:
const map1 = new Map([['a', 1], ['b', 2], ['c', 3]]);
const mapObject = (map) => Object.fromEntries(map.entries());

const obj = mapObject(map1);
console.log(obj);




//Set:
// a) Create a Set with the following values: 1, 2, 3, 3, 4, 5, 5
const set = new Set([1, 2, 3, 3, 4, 5, 5]);
console.log(set);

// b) Add the value 6 to the Set.
console.log(set.add(6));

// c) Check if the Set contains the value 3.
console.log(set.has(3));

// d) Remove the value 4 from the Set.
console.log(set.delete(4));
console.log(set);

console.log(set.clear());


// e) Create a Set from an array, removing duplicates:
const arr = [1, 2, 2, 3, 4, 4, 5];
const s = new Set(arr);
console.log(s);

// f) Find the intersection of two Sets:
const set1 = new Set([1, 2, 3, 4]);
const set2 = new Set([3, 4, 5, 6]);
const set3 = new Set([...set1].filter(x => set2.has(x)));
console.log(set3);




// Arrays:
// a) Given the array [1, 2, 3, 4, 5], use the map() method to create a new array with 
// each element doubled.
const array = [1, 2, 3, 4, 5];
const res = array.map(x=>x*2);
console.log(res);

// b) Use the filter() method to create a new array containing only the even numbers 
// from [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].
const Array1 =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const res1 = Array1.filter(
    x=>x%2==0);

// const res1 = Array1.filter(
//     function even(x){
//        return x%2==0;
//     })  
console.log(res1);


// c) Use the reduce() method to find the sum of all elements in the array [1, 2, 3, 4, 5].
const a = [1, 2, 3, 4, 5];
const r = a.reduce((a,b)=>a+b);
console.log(r);

// d) Use the find() method to find the first element in the array [10, 20, 30, 40, 50] 
// that is greater than 25.
let a1 = [10, 20, 30, 40, 50];
const r1 = a1.find(a=>a>25);
console.log(r1);


// e) Use the some() method to check if any element in the array [2, 4, 6, 8, 10] is odd.
const a2 = [2, 4, 6, 8, 10];
const r3 = a2.some(a=>a%2!==0)
// const r3 = a2.filter(a=>a%2!=0)

console.log(r3);


// f) Use the flatMap() method to create a new array that doubles each number and 
// removes any resulting numbers greater than 10:
const numbers = [1, 2, 3, 4, 5, 6]; 
// // Use flatMap to double numbers and filter out results > 10
const r4 = numbers.flatMap(a=>a*2);
console.log(r4);

const r5 = r4.filter(a=>a>10);
console.log(r5);


// g) Use the Array.from() method to create an array of numbers from 1 to 5:
// // Create an array [1, 2, 3, 4, 5] using Array.from()
console.log(Array.from([1, 2, 3, 4, 5]));


// h) Use the every() method to check if all elements in the array are positive:
const nums1 = [1, 2, 3, 4, 5]; 
// // Check if all numbers are positive
const r6 = nums1.every(a=>a>0);
console.log(r6);


// i) Use the Array.isArray() method to check if a variable is an array:
const arr2 = [1, 2, 3]; 
const obj4 = { a: 1, b: 2 }; 
// // Check if arr and obj are arrays
console.log(Array.isArray(arr2));
console.log(Array.isArray(obj4));

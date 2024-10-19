
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched');
        }, 5000);
    });
}
fetchData().then(data => console.log(data));

const asyncdata = async () => {
    // const data1 = 
    await fetchData();
    // console.log(data1);
    console.log("hello");
    console.log("hi");
    console.log("hello");
}
asyncdata();


setTimeout(() => {
    console.log("Hello World!");
}, 3000)

let t = setInterval(() => {
    console.log("hello eveyone");
    clearInterval(t);
}, 2000);



let int = setInterval(() => {
    for(let i=1;i<=5;i++)
    console.log(i);  
}, 1000);
setTimeout(() => {
    clearInterval(int);
    console.log("Interval cleared");
},5000);



let s1 = setTimeout(() => {
    console.log("Hello World!");
    // clearTimeout(s1); 
}, 3000)


const intervalId = setInterval(() => {
    console.log("Tick");
}, 1000);
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval cleared");
}, 5000);


// let s = {
//     name:"ravi",
//     id:101,
//     greet : function(){
//         console.log(this.name);   
//     }
// }


let s = {
    name:"ravi",
    id:101,
    greet(city){
        console.log(this.name); 
        console.log(city);   
    }
}

let x1 = s.greet.bind({name:"shankar"});
x1();
s.greet.call(s,"chennai");
s.greet.apply(s,["chennai"]);




let calci = {
    a:10,
    b:20,
    add(c,d){
        let z = c+d;
        return z;
    }
}
let y = calci.add.call(calci,1,2);
let r = calci.add.apply(calci,[3,4]);

console.log(y);
console.log(r);

function func(c){
    let s={
        name:"arjun",
        rollno:1
    }
    c(s);
}


func((s)=>{console.log(s);})

















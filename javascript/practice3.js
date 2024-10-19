

const payment = {
    isDone: true
}

setTimeout(() => {
    console.log(payment.isDone);
}, 5000);

// setInterval(()=>{
//     console.log(payment.isDone);   
// },5000);

console.log("hello");
console.log("hello");
console.log("hello");

const vote = new Promise((resolve, reject) => {
    let age = 18;
    if (age >= 18) {
        setTimeout(() => {
            resolve("Eligible");
        }, 4000);
    }
    else {
        reject("not eligible");
    }
})

vote.then((x) => {
    console.log(x);
})

    .catch(error => {
        console.error(error);

    });


const vote1 = () => {
    return new Promise((resolve, reject) => {
        let age = 18;
        if (age >= 18) {
            setTimeout(() => {
                resolve("Eligible");
            }, 3000);
        }
        else {
            reject("not eligible");
        }
    })
}

vote1()
    .then((x) => {
        console.log(x);
        return vote1();
    })

    .catch(error => {
        console.error(error);

    })

const voteasync = async () => {
    const data = await vote1();
    console.log(data);
    console.log("hi eveyone");
    console.log("how are you");
}
voteasync();






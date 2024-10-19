const express = require("express");
const { request } = require("http");
const morgan = require("morgan");

const app = express();

const port = 3000;


// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let students = [
    { name: "john", rollNo: 501 },
    { name: "mike", rollNo: 502 },
    { name: "carie", rollNo: 503 }
]

app.get('',(request, response) => {
    response.send(students);
})

app.post("",(request,response)=>{
    let body = request.body;
    if(body!=null && body['name'] && body['rollNo']){
        students.push(body);
        response.status(201).send(body)
    } else {
        response.status(400).send("Invalid Request Body");
    }
});


app.put("/:id",(req,res)=>{
    let rollNo = req.params.id;
    let body = req.body;
    if(rollNo!==null && body['name'] && body['rollNo']){
        let index =(students.findIndex(x=>x.rollNo==rollNo));
        const student = structuredClone(students[index]);
        student['name']=body['name'];
        students.splice(index,1,student);
        res.status(202).send(student)
    } else {
        res.status(400).send("Invalid Body")
    }
});


app.delete("/:id", (req, res) => {
    let id = req.params.id;
    if (id !== null) {
        let index = (students.findIndex(x => x.rollNo == id));
        const student = structuredClone(students[index]);
        students.splice(index, 1);
        res.status(200).send(`Deleted the reocrd by ${id}`)
    } else {
        res.status(500).send("Invalid id")
    }
})


app.listen(port, () => {
    console.log(`Server is listenting to port ${port}->http://localhost:${port}`);
})
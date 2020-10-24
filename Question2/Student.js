const app = require('express')();
const parser = require("body-parser");
const fs = require("fs");
const dir = __dirname;

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());


let students = [];

function readData(){
    const filename = "data.json";
    const jsonContent = fs.readFileSync(filename, 'utf-8');
    students = JSON.parse(jsonContent);
}

function saveData(){
    const filename = "data.json";
    const jsonData = JSON.stringify(student);
    fs.writeFileSync(filename, jsonData, 'utf-8');
}
app.get("/students", (req, res)=>{
    readData();
    res.send(JSON.stringify(students));    
})

app.put("/students", (req, res)=>{
    if(students.length == 0)
        readData();
    let body = req.body;
   
    for (let index = 0; index < students.length; index++) {
        let list = students[index];
        if (list.id == body.id) {
            list.name = body.name;
            list.address = body.address;
            saveData();
            res.send("Student updated successfully");
        }
    }
   
})

app.post('/students', (req, res)=>{
    if (students.length == 0)
        readData();
    let body = req.body;
    students.push(body);  
    saveData();
    res.send("Student added successfully");
})
app.delete("/student/:id", (req, res)=>{
  throw "Do";  
})
app.listen(2222, ()=>{
    console.log("Server is at 2222");
})


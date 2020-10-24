const { send } = require("process");

express = require("express");
app = express();

stu = require("./data.json");

app.get("/display", function(req, res)
{
    nameList = [];
    stu.forEach(element =>
    {
        nameList.push(element) 
    });
    res.send(nameList);
})

app.listen(3333, function(req, res)
{
    console.log("Server is at port 3333");
})

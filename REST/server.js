const express = require("express");
const app = express();
app.use(express.json());

let currentId = 2;

const data = [
    { name: "hans", age: 40, id: 0 },
    { name: "sepp", age: 21, id: 1 },
    { name: "susi", age: 15, id: 2 },
];

app.get("/people", function (req, res) {
    res.send(data);
});

app.get("/people/:id", function (req, res) {
    let id = req.params.id;
    res.send(data[id]);
});

app.delete("/people/:id", function (req, res) {
    let id = req.params.id;
    res.send.splice(id, 1);
});

app.post("/people", function (req, res) {
    let person = req.body;
    currentId++;
    person.id = currentId;
    data.push(person);
    res.send(person);
});

app.listen(3000); 
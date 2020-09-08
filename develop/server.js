const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const PORT = 3000;
const { json } = require('express')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", (request, response) => {
  response.sendFile(path.join(__dirname, "public/notes.html"));
});


app.get('/api/notes', (request, response) => {
  response.sendFile(path.join(__dirname, "/db/db.json"));
});

app.post('/api/notes', (request, response) => {

  console.log("HEY!")

  fs.readFile(__dirname + '/db/db.json', (err, file)=>{
    let data = JSON.parse(file);
    let newId = data[data.length-1].id +1;
    data.push({title: request.body.title,text: request.body.text, id: newId });
 
    fs.writeFile(__dirname + '/db/db.json', JSON.stringify(data), err => {
      console.log(err)
      response.send({complete: true})
    }) 
  });
 
});


app.delete('/api/notes/:id', (request, response) => {
  fs.readFile(__dirname + '/db/db.json', (err, file)=>{
    let data = JSON.parse(file);
    let newArray = [];


    for(let i = 0; i<data.length; i++) {
      if(!(Number(data[i].id) === Number(request.params.id))) {
        newArray.push(data[i]);
      }
    }
    fs.writeFile(__dirname + '/db/db.json', JSON.stringify(newArray), err => {
      response.send({complete: true})
    });   

    });
  });



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

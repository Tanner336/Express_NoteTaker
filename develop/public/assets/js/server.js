const express = require('express')
const path = require('path')
const port = 3000 
const fs = require('fs')
const { json } = require('express')

const root = (__dirname + '/public')

app.get('/', (req, res) = res.sendFle('/index.html'))

app.get('/api/notes', (request, response) => {
  console.log('/api/notes')
  
});

app.post('/api/notes', (request, response) => {

});

app.delete('/api/notes/:id', (request, response) => {

});

makeJson => {
  let data = fs.readFileSync(__dirname + '/cb/db.json');
  let json = JSON.parse(data);
  return json;
};


makeNote => {
  let object = {
    title: data.title,
    text: data.text,
    complete: false,
    hidden: false}
    
    return object
}

addNote => {
  let json = makeJson();
  let newNote = makeNote(note);
  json.push(newNote);
  saveNote(json);
};

saveNote => {
  let noteData = JSON.stringify();
  fs.writeFileSync(__dirname + '/cb/db.json', data);
};

deleteJson => {
  let json = makeJson();
  saveNote(json);
}
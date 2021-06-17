const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let users = [{'id': 1, 'username': 'Teste 1'}, {'id': 2, 'username': 'Teste 2'}];


function getUsers(){
    return users;
}

app.get('/users', (req, res) => {
    res.send(getUsers());
});

app.listen(3000);
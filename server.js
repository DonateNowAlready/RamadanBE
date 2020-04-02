const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password    : 'password'
});

db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});

const app = express();

app.get('/', (req, res) => {
    res.send("Sadaqa")
});

app.get('/createdb', (req, res) => {
    let sql_query = 'CREATE DATABASE sampledb';
    db.query(sql_query, (err, result) => {
        if(err) throw err;
        // console.log(result);
        console.log('Database created...');
        res.send('Database created...');
    });
});

app.get('/deletedb', (req, res) => {
    let sql_query = 'DROP DATABASE sampledb';
    db.query(sql_query, (err, result) => {
        if(err) throw err;
        // console.log(result);
        console.log('Database deleted...');
        res.send('Database deleted...');
    });
});

const port = process.env.PORT || '5000';
app.listen(port, () => {
    console.log(`Server started on port ${port}...`);
});
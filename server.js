const express = require('express');
const app = express();
const port = 5000;

var cors = require('cors');
app.use(cors());

var mysql = require('mysql');
var con = mysql.createConnection({
    host : 'localhost',
    user : 'btp',
    password : '1234',
    database : 'beyondtp'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


/*app.get('/api/' ,(req,res)=> {



    res.json();
});*/

app.listen(port, ()=> console.log('Server started on port ${port}'));
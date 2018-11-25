const express = require('express');
var mysql = require('mysql');
const app = express();
const port = 5000;
var cors = require('cors'); 
const bodyParser=require('body-parser');
app.use(cors());

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());


let connection = mysql.createConnection({
    host : 'localhost',
    user : 'btp',
    password : '1234',
    database : 'Miniproject'
});

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
   
    console.log('Connected to the MySQL server.');
});

app.get('/api/Restaurent/landing/', function(req, res){
        let sql = `SELECT Name,Image,Rating FROM Restaurent order by Rating desc`;
        connection.query(sql, (error, results, fields) => {
          if (error) {
            return console.error(error.message);
          }
          console.log(results);
          res.json(results);
        });
        
});

app.listen(port, ()=> console.log('Server started on port ${port}'));

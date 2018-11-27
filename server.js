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
        let sql = `SELECT RID,Name,Image,Rating,Cuisines,District FROM Restaurent order by Rating desc`;
        connection.query(sql, (error, results, fields) => {
          if (error) {
            return console.error(error.message);
          }
          console.log(results);
          res.json(results);
        });
        
});

app.get('/api/Restaurent/:restaurent/', function(req, res){
        let sql = `SELECT * FROM Restaurent where RID = `+ req.params.restaurent;
        connection.query(sql, (error, results, fields) => {
          if (error) {
            return console.error(error.message);
          }
          console.log(results);
          res.json(results);
        });
        
});

app.get('/api/Restaurent/review/:rid/', function(req, res){
        console.log(req.params.rid);
        let sql = `SELECT * FROM Review where RestID=`+req.params.rid;
        connection.query(sql, (error, results, fields) => {
          if (error) {
            return console.error(error.message);
          }
          console.log(results);
          res.json(results);
        });
        
});

app.post('/api/addreview',function(req,res){
  let response= req.body;
  console.log(response);
    let sql =`INSERT INTO Review(RestID,UserID,Rating,Title,Review) VALUES (?,?,?,?,?)`;
    let creds=[response.rid,response.name,response.rating,response.title,response.review];
    connection.query(sql, creds, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      console.log(results);
      res.json(results);
      });
});

app.post('/api/addrestaurant',function(req,res){
  let response= req.body;
  console.log(response);
    let sql =`INSERT INTO Restaurent(Name,Location,District,Image,Cuisines,Pricefortwo,Timing,Rating,Totalreviews) VALUES (?,?,?,?,?,?,?,?,?)`;
    let creds=[response.rname,response.location,response.district,response.image,response.cuisines,response.price_for_two,response.timing,response.rating,response.rating_no];
    connection.query(sql, creds, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      console.log(results);
      res.json(results);
      });
});

app.listen(port, ()=> console.log('Server started on port ${port}'));

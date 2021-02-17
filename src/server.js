const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const e = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
user: "root",
host: "127.0.0.1",
password: "",
database: "users" 
});


app.post('/create', (req,res) => {
    const fname = req.body.fname
    const lname = req.body.lname
    const email = req.body.email
    const uname = req.body.uname
    const pass = req.body.pass
    const age = req.body.age

    db.query('INSERT INTO userdata (fname,lname,email,uname,pass,age) VALUES (?,?,?,?,?,?)',
    [fname,lname,email,uname,pass,age],(err,result) => {
        if(err)
        {
            console.log(err);
        }
        else{
            res.send("Values Inserted");
        }
    }
    );
});

app.post('/login',(req,res) => {
    const uname = req.body.uname;
    const pass = req.body.pass;

    db.query(
    "SELECT * from userdata WHERE uname = ? AND pass = ?",
    [uname,pass],
    (err,result) => {
        if(err)
        {
            res.send({err: err})
        }

        if(result) {
            res.send(result);
           }
        else{
               res.send({message: "Wrong username or password"});
           }
        
    }
    );
})
app.listen(3001,() => {
    console.log("Hey your server is running on port 3001");
});


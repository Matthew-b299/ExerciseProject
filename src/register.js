import "./App.css";
import {useState} from "react";
import Axios from "axios"
import {BrowserRouter, Route,Switch } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Dialog from './Dialog';



function Register() {
 
  const [fname,setFname] = useState("")
  const [lname,setLname] = useState("")
  const [email,setEmail] = useState("")
  const [uname,setUname] = useState("")
  const [pass,setPass] = useState("")
  const [age,setAge] = useState("")
  
  const addUser = () => {
    Axios.post("http://localhost:3001/create", 
    {fname: fname,
      lname: lname,
      uname: uname,
      email: email,
      pass: pass,
      age: age
    
  }).then(() => {
    console.log("Success");
  });
    
  <Dialog>You have succesfully Registered!</Dialog>
  };
  return  (
  <div className="App">
    <div className = "info">
      <h4 style={{color: "yellow"}} >Enter information</h4>
    <label style={{color: "yellow"}}>First Name</label>
    <input type = "text" onChange={(event) =>{setFname(event.target.value)}} />
    <label style={{color: "yellow"}}>Last Name</label>
    <input type = "text" onChange={(event) =>{setLname(event.target.value)}}/>
    <label style={{color: "yellow"}}>Email</label>
    <input type = "text" onChange={(event) =>{setEmail(event.target.value)}}/>
    <label style={{color: "yellow"}}>UserName</label>
    <input type = "text" onChange={(event) =>{setUname(event.target.value)}}/>
    <label style={{color: "yellow"}}>Password</label>
    <input type = "password" onChange={(event) =>{setPass(event.target.value)}}/>
    <label style={{color: "yellow"}}>Age</label>
    <input type = "number" onChange={(event) =>{setAge(event.target.value)}}/>
    <button onClick = {addUser}>register</button>

    

    </div>


  </div>
  );



}

export default Register;

import react from "react";
import {Component, useState} from "react";
import App from './App';
import Axios from "axios"
import './App.css';
import Register from './register'
import {Link, BrowserRouter as Router, Switch,Route} from "react-router-dom";

 function Log (){
     const [username,setUsername] = useState("");
     const [password,setPassword] = useState("");
     const[application,setApplication] = useState(false);
     const[loginScreen,setLoginScreen] = useState(true);
     
     const login = () => {
        Axios.post("http://localhost:3001/login", 
        {
          username: username,
          password: password,
          
      }).then(() => {
        console.log("Success");

        setApplication(true);
        setLoginScreen(false);
      });

    }
    return (
        <div>
        <h1> Login</h1>
        <input placeholder = "enter email" onChange ={(e) => {
            setUsername(e.target.value);
        }}></input><br/>

        <input placeholder = "enter password" onChange ={(e) => {
            setPassword(e.target.value);
        }} ></input><br/>

        <button onClick = {login}>Login</button>

        <h2>Not a member? Sign UP!</h2>
        <Router>
        <Switch>
        <Route path = "/register" component={Register} />
        </Switch>

        <Link to = '/register'>
        <button >Sign Up</button>
        </Link>


        </Router>

        {
           application === true?
           <App />
           :null
            
        }

    </div>
    )

}  
export default Log;
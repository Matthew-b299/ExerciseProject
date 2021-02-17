import React, { Component } from 'react'
import './App.css'
import Nav from './nav';
import About from './about'
import Shop from './shop';
import bmi from './bmi';
import Meal from './meal';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Meet from './Sprint.mp4';


class Home extends Component{
  constructor(){
  super()
  this.state = {
    show: true
  }
  
  }
  handleNext() {
    this.setState({
        show: false
    
    });
  }

  backToHome() {
    this.setState({
        show: true
    
    });
  }



render() {
  return(

    <Router>
    <div>
      <Nav />

      <Switch>
      <Route path = "/about" component={About}/>
       <Route path = "/shop" component={Shop}/>
       <Route path = "/bmi" component={bmi} />
       <Route path = "/meal" component={Meal} />
       </Switch>


       <Link to = '/bmi'>
     <button className = "example" onClick={()=> this.handleNext()}>BMI Calculator</button>     
          </Link>
 


  <Link to = '/shop'>
 <button className = "example" onClick={()=> this.handleNext()}>
   Exercises
 </button>
 </Link>


 <Link to = '/meal'>
 <button className = "example" onClick={()=> this.handleNext()}>
   Meals
 </button>

 </Link>

 <Link to = '/'>
 <button className = "example" onClick={()=> this.backToHome()}>
   Home
 </button>
 </Link>
 

 {
   this.state.show?
  <video autoPlay loop muted>
   <source src={Meet} type="video/mp4"/>
   </video>   
   :null
 }
   

    </div>

<div>


 </div>

    </Router>
  );
}
}
export default Home;
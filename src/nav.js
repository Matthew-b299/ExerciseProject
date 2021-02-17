import React, { Component } from 'react'
import './App.css'
import {Link} from 'react-router-dom';
import Meet from './Sprint.mp4';

 function Nav () {
  return (

    <nav> 
      <h3> TheExerciseProject </h3> 
      
      <ul className ="nav-Links">
          <Link to = '/about'>
          <li>About Us</li>
          </Link>

          <Link to = '/bmi'>
          <li>Sign Out</li>
          </Link>

          <Link to = '/'>
          </Link>
          
      </ul>
    </nav>


    
   
  );
}
export default Nav;
import React, { Component, useState} from 'react'
import './App.css'
import Dialog from './Dialog';


function Meal() {
    const[meal,setMeal] = useState("");
    const [print,setPrint] = useState(false);
  return (

    <div>
      <h1> Meals </h1>
      <h2> Are you vegetarian? </h2>

      <select Style="width:200px" onChange = {(e) => {
        const selected = e.target.value;

        let vMeal = ["MEAL 1: Coconut Lentil Curry with greens",
        "MEAL 2: Veggie Packed Quinoa Fried Rice" ,
         "MEAL 3: One-Pot Tomato Bail Pasta"]

         let nMeal = ["MEAL 1: Orange and Tomato Simmered Chicken with Couscous",
         "MEAL 2: One-Pot Pasta with Spinach, Tomatoes, and Chicken breast" ,
          "MEAL 3: Pan-Roasted Chicken and Vegetables"]

        switch(selected){
            case "Yes":
                var vMealPlan = vMeal[Math.floor(Math.random() * vMeal.length)];  
                setMeal(vMealPlan);
                break;
                
            case "No":
                var nMealPlan = nMeal[Math.floor(Math.random() * nMeal.length)];  
                setMeal(nMealPlan);
                break;
            

            default:
                console.log("Default");
                break;
        
        }
        
        setPrint(false)}}>
    <option value = "Yes"></option>
    <option value = "Yes">Yes</option>
    <option value = "No">No</option>
    </select>
    
<button font-size="5px" onClick={() =>setPrint(true) }>SUBMIT</button>

{
    print?
    <Dialog>{meal}</Dialog>
    :null
}
    </div>
  );
}
export default Meal;
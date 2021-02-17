import React, { Component, useState } from 'react'
import './App.css'
import Dialog from './Dialog';

function Bmi() {

    const [heightData,setHeightData] = useState("");
    const [weightData,setWeightData] = useState("");
    const [print,setPrint] = useState(false);
    const [hold,setHold] = useState("");
    const[result,setResult] = useState("");
     

    function getHeight(val)
    {
        setHeightData(val.target.value);

    }


    function getWeight(val)
    {
        setWeightData(val.target.value);
    }

    function calculateBMI()
    {
        let weightLbs = weightData / 2.2
        let heightM = heightData / 100
        let bmi = Math.floor(((weightLbs) / (heightM * heightM)))
        //setHold(bmi);

        setHold(bmi);
        if(bmi < 19)
        {
            setResult("you are considered underweight and possibly malnourished");
        }
        
        if(bmi > 19 && bmi < 25)
        {
            setResult(" you are within a healthy weight range for young and middle-aged adults");
        }

        if(bmi > 25 && bmi < 30)
        {
            setResult("you are considered overweight");
        }

        if(bmi > 30)
        {
            setResult("you are considered obese");
        }
       
       
    }

  return (

<div>

<h1>BMI Calculator</h1>
<h2>Complete Form Below</h2>
<form onChange = {() => {
    setPrint(false);
}}>
  <label>
    Height(cm)
    <input type="number" min ="0" name="feet" onChange = {getHeight}/>
  </label>

  <label>
    Weight(lbs)
    <input type="number" min ="0" name="weight" onChange = {getWeight} />
  </label>
</form>



<input type="submit" value="Submit" className="button2" onClick = {(height,weight) =>
{
    calculateBMI()
    setPrint(true);

    
}} />


{
    print?
        <Dialog>Your bmi is {hold} </Dialog>
        :null

}
    
{
    print?
        <h4>{result} </h4>
        :null

}
   
    </div>

  );
}
export default Bmi;
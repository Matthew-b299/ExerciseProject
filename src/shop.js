import React, { useState } from 'react'
import './App.css';
import Dialog from './Dialog';

 
  function Shop () {
     const [muscleGroup, setMuscleGroup] = useState("");
     const [print,setPrint] = useState(false);
  
  return (

    <div className = "container p-5">

      <h1> Exercises </h1>
      <h2>PLEASE SELECT A MUSCLE GROUP</h2>
    <select className="select"
    onChange = {(e) => {
    const selected = e.target.value;
    console.log(selected);
    //let exercises = '';
    let chestWorkout = ["WORKOUT 1: 3 sets of 10 push ups, 2 sets of 15 clap push ups, 30 push up second Hold",
     "WORKOUT 2: 4 sets of 5 bench press, 30 second incline dumbbell press, 25 second push up hold" ,
      "WORKOUT 3: 2 minutes of flys, 45 second dumbbell press, 45 second decline dumbell press"]
  
      let backWorkout = ["WORKOUT 1: 3 sets of 10 pull ups, 3 sets of 15 lateral Row, 30 lateral pull down",
     "WORKOUT 2: 5 sets of 5 Deadlift, 10 weighted pull up, 30 second T-Bar lateral row" ,
      "WORKOUT 3: 45 seconds of narrow grip pull ups, 45 second wide grip pull ups, 45 second incline"]

      let legWorkout = ["WORKOUT 1: 5 sets of 5 Back Squat, 3 sets of 15 Romanian Deadlift, 10 lunges, 5 per leg",
     "WORKOUT 2: 3 sets of 15 front squat, 3 set of 15 bulgarian split squat per leg, 30 Wall Sit hold" ,
      "WORKOUT 3: 45 second Explosive Lunge, 45 second Jump Squat, 20 second Cossack Squat"]

      let armsWorkout = ["WORKOUT 1: 2 sets of 10 bicep curls, 2 sets of 15 over the head tricep extension, 15 second parallel bar dip",
     "WORKOUT 2: 30 second incline push up, 30 second barbell curl, 30 second decline push up" ,
      "WORKOUT 3: 3 sets of 3 minutes alternating push ups and pull ups. 10 push ups followed by 10 pull ups for 3 minutes"]

      let cardioWorkout = ["WORKOUT 1: 2 minute sets of jump rope, 2 sets of 15 burpees",
     "WORKOUT 2: 3 sets of jump squats, 10 box jumps, 25 second running on the spot"]

  switch(selected){
    case "Chest":
        alert("CHEST SELECTED!!");
        var chest = chestWorkout[Math.floor(Math.random() * chestWorkout.length)];  
        setMuscleGroup(chest);   
    
        break;
        
        case "Back":
        alert("BACK SELECTED!!");
        var back = backWorkout[Math.floor(Math.random() * backWorkout.length)];  
        setMuscleGroup(back);   
          
        break;
      
      case "Legs":
        alert("LEGS SELECTED!!");
        var legs = legWorkout[Math.floor(Math.random() * legWorkout.length)];  
        setMuscleGroup(legs);   
          
        break;

      case "Arms":
        alert("ARMS SELECTED!!");
        var arms = armsWorkout[Math.floor(Math.random() * armsWorkout.length)];  
        setMuscleGroup(arms);   
          
        break;
      
      
      case "Cardio":
        //alert("CARDIO SELECTED!!");
        var cardio = cardioWorkout[Math.floor(Math.random() * cardioWorkout.length)];  
        setMuscleGroup(cardio);   
          
        break;
default:
  alert(" ");
    }
    
  
    setPrint(false)}}>

    <option value = "Chest"></option>
    <option value = "Chest">Chest</option>
    <option value = "Back">Back</option>
    <option value = "Legs">Legs</option>
    <option value = "Arms">Arms</option>
    <option value = "Cardio">Cardio</option>
    
    </select>
     {
      print?
      <Dialog>{muscleGroup}</Dialog>
      :null
      
    }
    
    <button onClick={() =>setPrint(true)}>SUBMIT</button>

   
    
</div>

  );
}
  

export default Shop;

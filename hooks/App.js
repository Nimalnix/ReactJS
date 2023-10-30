import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';

function App() {

 const [visitorcount, setvisitorcount] = useState(0); // Initialize visitor count

 //This arrow function will execute in all the 3 phases,viz,Mounting
 //Updating and unMounting phases,useEffect hook introduce all 
 //the 3 phases for this functional component


 useEffect(() => {
  console.log('visitor no is incremented'+visitorcount);  

},[visitorcount]);


// Run once on component mount
 //ReactJs implements an observer which bobserves the changes for
 //vostorcount and if visitorcount changes,it automatically call that function 
   
 

 const updatevisitorcount = () => {

    setvisitorcount(visitorcount + 1); // Increment visitor count
    console.log('visitor count incremented . You are visitor #')

 }

 return (

    <div className="App">

      <form>

        <input type='button' onClick={updatevisitorcount} value='visitors count' />

        <b>Your token number is #</b> {visitorcount}

      </form>

    </div>

 );

}

export default App;



//In this code, we have a functional component `App` that uses the `useState` and `useEffect` hooks from React. The `useState` hook is used to declare a state variable called `visitorcount` and a function called `setvisitorcount` to update it. The `useEffect` hook is used to perform side effects, such as updating the visitor count, when the component mounts. The `updatevisitorcount` function is used to increment the visitor count when the button is clicked. The component renders a form with a button and displays the current visitor count.
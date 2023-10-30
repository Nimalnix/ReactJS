
import './App.css';
import {useState} from 'react'
function App(props) {
  // Get the user's name.
  var userName = prompt("Enter your Name");

  // Check if the user is allowed to visit.
  if (props.name != userName) {
    // Get the current time.
    var today = new Date();

    // Check if the current time is after the visiting time.
    if (today.getHours() >= Number(props.vistingTime)) {
      // Welcome the user.
      return (
        <div className="App">
          <b>Welcome MR/MRS</b> {props.firstName} &nbsp;&nbsp;
          {props.lastName}
          <input type="text" />
        </div>
      );
    } else {
      // Tell the user to visit after the maintenance time.
      return (
        <div className="App">
          <b>Visit after the bed time {props.vistingTime} maintenance
            happening</b>
        </div>
      );
    }
  } else {
    // Tell the user that their account is blocked.
    //imp:LEARN STATE vs PROPS
    return (
      <div>
        <center>
        <b>
          {props.Name} Your account is blocked please contact user
        </b>
        </center>
      </div>
    );
  }
}

export default App;
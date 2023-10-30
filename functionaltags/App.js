
import './App.css';




import React, { useState } from 'react';

 

function App() {
  const [firstName, setFirstName] = useState('Unknown');
  const [lastName, setLastName] = useState('Unknown');
  const [agree, setAgree] = useState(false);
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');

 

  const updateFirstName = (event) => {
    const value = event.target.value;
    setFirstName(value);
    if (value.length < 5) {
      setFirstNameError('First name must have at least 5 characters.');
    } else {
      setFirstNameError('');
    }
  }

 

  const updateLastName = (event) => {
    const value = event.target.value;
    setLastName(value);
    if (value.length < 5) {
      setLastNameError('Last name must have at least 5 characters.');
    } else {
      setLastNameError('');
    }
  }

 

  const enableDisable = (event) => {
    setAgree(event.target.checked);
  }

 

  const isSaveButtonEnabled = firstName.length >= 5 && lastName.length >= 5 && agree;

 

  return (
<div>
<form>
        Enter your First name <input type="text" value={firstName} onChange={updateFirstName} /><br />
        {firstNameError && <div className="error">{firstNameError}</div>}
        Enter your Last name <input type="text" value={lastName} onChange={updateLastName} /><br />
        {lastNameError && <div className="error">{lastNameError}</div>}
<b>Your Name</b> {firstName}&nbsp;&nbsp;{lastName}<br />
<input type="checkbox" value={agree} onChange={enableDisable} /> Agree to Terms & Conditions<br />
<input type="button" value="Save" disabled={!isSaveButtonEnabled} />
</form>
</div>
  );
}

 

export default App;
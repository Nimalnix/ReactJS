

import './App.css';
import { useState,createContext} from 'react';
import UserInfo from './UserInfo';
//common memoy area that is accessed by multiple pages
export const sharedData=createContext();

function App() {
  const [agree,setAgree]=useState(false);
  // Declare state variables to store first and last name
  const [firstName,setFirstName] = useState('unknown');
  const [lastName,setLastName] = useState('unknown');



  const updateFirstName=(event)=>
  {
    setFirstName(event.target.value)
  }

  const updateLastName=(event)=>
  {
    setLastName(event.target.value)
  }

  const updateAgree=(event)=> 
  {
    setAgree(event.target.checked)
  }


  return (
    //Mention what data has to be shared
    //Also mention the page or the component with which the data has to be shared
    // Share first and last name with the UserInfo component
    <div className="App">
       First name <input type='text' value={firstName} onChange={updateFirstName} /> <br/>
        Last name <input type='text' value={lastName}  onChange={updateLastName} />
        <input type="checkbox" onChange={updateAgree} /> Agree to T&C
        <br></br>
      <sharedData.Provider value={firstName +" "+lastName}>
       
        {agree ? <UserInfo /> : " "}
      </sharedData.Provider>
    </div>
  );
}

export default App;
  
import React, { useState } from 'react';

import Home  from './Home';

import About from './AboutUs';

import Contact from './ContactUs';

import Registration from './Registration';

import {BrowserRouter,Routes,Route} from 'react-router-dom';

import {Link} from "react-router-dom";

 

function Header() {

  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');

  const [loginAttempts, setLoginAttempts] = useState(0);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  let [users, setUsers] = useState([{ username: 'Harish', password: 'Harish123' },

  { username: 'user2', password: 'pass2' },]);

 

 

  // Sample users array

  //const users = [

   // { username: 'Harish', password: 'Harish123' },

   // { username: 'user2', password: 'pass2' },

    // ... more users

 // ];

  const handleRegister = () => {

    // Add new user to users array

    setUsers(prevUsers => [...prevUsers, { username, password }]);

    // Clear input fields

    setUsername('');

    setPassword('');

};

 

  const handleLogin = () => {

    const user = users.find(u => u.username === username);

 

    if (user && user.password === password) {

      setIsAuthenticated(true);

      setErrorMessage('');

      setLoginAttempts(0); // Reset the login attempts

    } else {

      setLoginAttempts(prevAttempts => prevAttempts + 1);

    }

 

    if (loginAttempts >= 4) {

      setErrorMessage('Too many login attempts. Please try again later.');

    }

  };

 

  return (

    <center>

    <div>

    <div>

            <h2>Register User</h2>

           

            <label>

                Username:

                <input

                    type="text"

                    value={username}

                    onChange={e => setUsername(e.target.value)}

                    placeholder="Enter username"

                />

            </label>

            <br />

 

            <label>

                Password:

                <input

                    type="password"

                    value={password}

                    onChange={e => setPassword(e.target.value)}

                    placeholder="Enter password"

                />

            </label>

            <br />

 

            <button onClick={handleRegister}>Register</button>

 

            {/* Optional: Display list of users */}

            <ul>

                {users.map((user, index) => (

                    <li key={index}>{user.username}</li>

                ))}

            </ul>

        </div>

      {isAuthenticated ? (

        <div>

            <BrowserRouter>

   

     

        <Routes>

         <Route>

         

       

           <Route path='home' element={<Home/>}/>

           <Route path='Contact' element={<Contact/>}/>

             <Route path='Registration' element={<Registration/>}/>

             <Route  path='About' element={<About/>}/>

             </Route>    

                 

             

       

        </Routes>

        <div>

               

               <Link to="/Home">Home</Link>&nbsp;&nbsp;

               <Link to="/Contact">Contact Us</Link>&nbsp;&nbsp;

               <Link to="/About">About</Link>&nbsp;&nbsp;

               <Link to="/Registration">Registration</Link>

         </div>    

        </BrowserRouter></div>

      ) : (

        <div>

          <input

            type="text"

            value={username}

            onChange={e => setUsername(e.target.value)}

            placeholder="Username"

          />

          <input

            type="password"

            value={password}

            onChange={e => setPassword(e.target.value)}

            placeholder="Password"

          />

          <button onClick={handleLogin} disabled={loginAttempts >= 5}>

            Login

          </button>

          {errorMessage && <div>{errorMessage}</div>}

        </div>

      )}

    </div>

    </center>

  );

}

 

export default Header;


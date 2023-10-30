
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';

import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Registration from './Registration';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
     
      <Link to="/Home">Home</Link>&nbsp;&nbsp;
      <Link to="/ContactUs">Contact Us</Link>&nbsp;&nbsp;
      <Link to="/AboutUs">About Us</Link>&nbsp;&nbsp;
      <Link to="/Registration">Registration</Link>&nbsp;&nbsp;

      </div><br/><br/>
      
      <Routes>

     
        <Route path='/Home' element={<Home/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
        <Route path='/Registration' element={<Registration/>}/>
       
       
      

      </Routes>
      
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;

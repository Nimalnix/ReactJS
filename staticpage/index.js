import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Navbar from './Staticexp/Navbar.js';
import ExampleOne from './Staticexp/ExampleOne';
import SetState from './Staticexp/SetState';
import LifecycleOfA from './Staticexp/LifecycleOfA';
import RefDemo from './Staticexp/RefDemo';
import UseState from './Staticexp/UseState';
import ClassCounterOne from './Staticexp/ClassCounterOne';
import IntervalClassCounter from './Staticexp/IntervalClassCounter';
import FetchingDataWithUseeffect from './Staticexp/FetchingDataWithUseeffect';
import FetchingData from './Staticexp/FetchingData';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <App />
  <Navbar />
  <ExampleOne />
  <SetState />
  < LifecycleOfA />
  <RefDemo />
  <br></br>
 <UseState /> 
 <ClassCounterOne />
 <IntervalClassCounter/>
 <FetchingDataWithUseeffect />
 <FetchingData />


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

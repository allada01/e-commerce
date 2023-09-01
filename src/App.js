import React from 'react';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import './App.css';
import Customer from './Components/Customer';

function App() {

  const [isLoggedIn, setIsLoggedIn]= React.useState(false);
  // isLoggedIn= false, initially the user is not logged in 
  //later when the user logs in we need to set the setIsLoggedIn to true (see /Components/Login)

  return (
   <div>
      <Navbar data={setIsLoggedIn} initial={isLoggedIn}/>
      <Customer/>    
   </div>
  );
}

export default App;

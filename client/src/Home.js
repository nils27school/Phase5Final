import React, { useState } from 'react';
import  Login  from "./Login";
import  Register  from "./Register";
import './App.css';

function Home() {
    const [currentForm, setCurrentForm] = useState('login');
    const toggleForm = (forName) => {
      setCurrentForm(forName);
    }
    const bgColor = 'salmon';
    return (
      <>
      <div className="Home" style={{backgroundColor: 'tan', color: 'white}}'}}>
        {
          currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
        }
      </div>
      </>
    );
  }

  export default Home;
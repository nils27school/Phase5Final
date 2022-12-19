import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import Navbar from './Navbar';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import About from './pages/About';




function App() {
  let component
  switch (window.location.pathname) {
    case "/":
    component = <Home/>
    break
    case "/recipes":
      component = <Recipes/>
    break
    case "/about":
      component = <About/>
      break 

  }
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (forName) => {
    setCurrentForm(forName);
  }
  

  return (
    <>
    <div className="App">
      <Navbar/>
      <div className="container">{component}</div>
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
      }
    </div>
    </>
  );
}

export default App;
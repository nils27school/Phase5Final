import React, { useState } from 'react';
import './App.css';
// import { Login } from "./Login";
// import { Register } from "./Register";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import Recipes from "./Recipes";
import Comment from "./Comment";

function App() {
  return (
    <div>
      <NavBar />
      <>
      <Routes>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/recipes" element={<Recipes/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/comment" element={<Comment/>}/>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
      </>
    </div>
    
  );
}


export default App;




//   const [currentForm, setCurrentForm] = useState('login');

//   const toggleForm = (forName) => {
//     setCurrentForm(forName);
//   }
  

//   return (
//     <>
//     <div className="App">
//       <Navbar/>
//       {/* <div className="container">{component}</div> */}
//       {
//         currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
//       }
//     </div>
//     </>
//   );
// }

